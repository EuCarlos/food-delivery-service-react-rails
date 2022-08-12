require 'rails_helper'

RSpec.describe "Api::AvailableCitiesController", type: :request do
  describe "GET /api/available_cities" do
    it "returns http success" do
      get available_cities_path
      expect(response).to have_http_status(:success)
    end
  end
end
