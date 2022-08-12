require 'rails_helper'

RSpec.describe "Api::CategoriesController", type: :request do
  describe "GET /api/categories" do
    it "returns http success" do
      get categories_path
      expect(response).to have_http_status(:success)
    end
  end
end
