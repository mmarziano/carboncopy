class OrganizationSerializer < ActiveModel::Serializer
  attributes :name, :address, :city, :state, :zipcode, :billing_email
  has_many :receipts
end
