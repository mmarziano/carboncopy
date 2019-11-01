class Organization < ApplicationRecord
    has_many :receipts

    scope :query_by_name, ->(name) { where("name == ?", name) }

    
end
