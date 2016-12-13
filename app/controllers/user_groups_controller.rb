class UserGroupsController < ApplicationController

  def create
    @group = UserGroup.new(params_id)
    respond_to do |format|
      if @group.save
      UserNotifierMailer.sample_email(@group).deliver
        format.json { render :show, status: :created, location: @group }
      else
        format.json { render json: @group.errors, status: :unprocessable_entity }
      end
    end
  end
    def invites_update
      invites.update
    end

    def accept

    end

    def reject
      @group = UserGroup.find(params[:id])
      new_restaurant
      reject_counter
      render "show"
    end


  private
  def reject_counter
    @group.reject_counter += 1
    if @group.reject_counter <= 2
      @group.invites.map{|invite| invite.email}.each do |email|
        @group.invites << Invite.new(email: email)
      end
    elsif @group.reject_counter == 3
      @group.each do |email|
        @group.invites << Invite.new(email: email)
      end
    end
  end

  def new_restaurant
    term = { term: params[:food],
             limit: 40,
             categories: 'restaurants',
             radius: miles_to_meters(params[:radius]),
             price: params[:price],
             location: current_user.address }

    response = HTTP.auth(ENV['fusion_token']).get('https://api.yelp.com/v3/businesses/search', params: term)
    parsed = response.parse
    raise(response)
    Rails.logger.info parsed.inspect
    random_business = parsed['businesses'].sample
      @group.update(
      restaurant_name: random_business['name'],
      address: random_business['location']['address1'] + random_business['location']['city'] + random_business['location']['state'] + random_business['location']['zip_code'],
      url: random_business['url'],
      phone: random_business['phone']
    )
  end

  def miles_to_meters(radius)
    radius.to_i * 1609
  end
end
