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
    @group = UserGroup.find(params[:id])
    accept_counter
    redirect_to('/accept')
  end

  def reject
    @group = UserGroup.find(params[:id])
    reject_counter
    if @group.reject_counter == 1
      redirect_to('/reject')
    elsif @group.reject_counter >= 1
      redirect_to('/rejecttwo')
    end
  end
end

  private

def reject_counter
  @group.accept_counter = 0
  @group.reject_counter += 1
  @group.save
  new_restaurant
  if @group.reject_counter <= 1
    @group.invites.each do |email|
      email.invites
    end
  elsif @group.reject_counter >= 2
    @group.invites.each do |invite|
      UserNotifierMailer.send_final_email(invite).deliver
    end
  end
end

def accept_counter
  @group.accept_counter += 1
  @group.save
  if @group.accept_counter == @group.invites.count
    @group.invites.map(&:email).each do |email|
      AcceptMailer.accept_email(email, @group).deliver
    end
  end

  def new_restaurant
    term = { term: @group.search_food,
             limit: 10,
             categories: 'restaurants',
             radius: miles_to_meters(@group.search_radius),
             price: @group.search_price,
             location: current_user.address }

    response = HTTP.auth(ENV['fusion_token']).get('https://api.yelp.com/v3/businesses/search', params: term)
    parsed = response.parse
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
