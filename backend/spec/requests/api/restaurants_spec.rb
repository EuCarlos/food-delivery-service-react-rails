require 'rails_helper'

RSpec.describe "Api::RestaurantsController", type: :request do
  describe "GET /api/restaurants" do
    it "should return json response from all restaurants" do
      get restaurants_path
      expect(response).to have_http_status(:success)
    end

    it "should return the json of a restaurant when the id is informed" do
      restaurant_id = Random.new.rand(1..13).to_s

      get "/api/restaurants/", params: { id: restaurant_id }
      expect(response).to have_http_status(:success)
    end

    it "should return the json of a restaurant when the friendly id is informed" do
      restaurant_id = "la-pergoletti"

      get "/api/restaurants/", params: { id: restaurant_id }
      expect(response).to have_http_status(:success)
    end
  end
end
