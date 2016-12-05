class GeoSearchController < ApplicationController
  def search
    res = MultiGeocoder.geocode(params[:current_user_address])
    @lat = res.lat
    @lng = res.lng
    coordinates = { latitude: @lat, longitude: @lng }
    params = { term: 'Type',
               limit: 40,
               category_filter: 'type',
               radius_filter: '24140' }
    results = Yelp.client.search_by_coordinates(coordinates, params)
    render json: results
  end

  def filter_price
    @price = Price.find(1).price
    @price = [],
    @price.each do |price|
    @price << price if price.file_type == 'price'
  end
  end
