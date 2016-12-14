class GeoSearchController < ApplicationController
  def search
    term = { term: params[:food],
             limit: 10,
             categories: 'restaurants',
             radius: miles_to_meters(params[:radius]),
             price: params[:price],
             location: current_user.address }

    response = HTTP.auth(ENV['fusion_token']).get('https://api.yelp.com/v3/businesses/search', params: term)
    parsed = response.parse
    Rails.logger.info parsed.inspect
    random_business = parsed['businesses'].sample
    @group = current_user.user_groups.create(
      restaurant_name: random_business['name'],
      address: random_business['location']['address1'] + ", " + random_business['location']['city'] + ", " + random_business['location']['state'] + ", " + random_business['location']['zip_code'],
      url: random_business['url'],
      phone: random_business['phone'],
      search_food: params[:food],
      search_radius: params[:radius],
      search_price: params[:price]

    )
    @invites = params[:friends]
    if @invites
      @invites.each do |email|
    @group.invites << Invite.new(email: email)
      end
    end

    def new_invite
      @invite = Invite.new(invite_params)
      @invite.sender_id = current_user.id
      @invite.save
      Mailer.new_user_invite(@invite, new_user_registration_path(invite_token: @invite.token)).deliver
    end
    render json: random_business
  end

  private

  def miles_to_meters(radius)
    radius.to_i * 1609
  end
end
