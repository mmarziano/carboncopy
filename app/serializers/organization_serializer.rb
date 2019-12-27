class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :zipcode, :pin
  has_many :receipts
end
