class GeoSearchController < ApplicationController
  def search
    term = { term: params[:food],
               limit: 40,
               categories: 'restaurants',
               radius: miles_to_meters(params[:radius]),
               price: params[:price],
               location: [:address] }



response = HTTP.auth(ENV['fusion_token']).get('https://api.yelp.com/v3/businesses/search', params: term)
parsed = response.parse
random_business = parsed['businesses'].sample
render json: random_business
  end



  private

  def miles_to_meters(radius)
    radius.to_i * 1609
  end

end
