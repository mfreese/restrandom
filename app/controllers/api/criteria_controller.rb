class Api::CriteriaController < ApplicationController

def create


end

def search
  parameters = { term: params[:term], limit: 16 }
  render json: Yelp.client.search('San Francisco', parameters)
end
end







end
