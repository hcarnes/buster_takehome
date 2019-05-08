class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude, :longitude
end
