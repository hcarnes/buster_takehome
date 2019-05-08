# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

json = ActiveSupport::JSON.decode(File.read('db/companies.json'))

json.each do |company|
  Company.create!(name: company['company'], latitude: company['latitude'], longitude: company['longitude'])
end