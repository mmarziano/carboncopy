class Organization < ApplicationRecord
    validates_presence_of :name, :presence => true
    validates :name, uniqueness: { case_sensitive: false }
    validates :address, uniqueness: { case_sensitive: false }

    has_many :receipts

    scope :query_by_name, ->(name) { where("name == ?", name) }

    
end
