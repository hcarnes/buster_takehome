require 'test_helper'

class CompaniesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @companies = Company.all
  end

  test "should list companies as json" do
   get companies_url, as: :json
   assert_response :success
   
   @companies.each do |company|
     assert_includes(response.parsed_body, {id: company.id, name: company.name, latitude: company.latitude, longitude: company.longitude}.stringify_keys)
   end
 end
end