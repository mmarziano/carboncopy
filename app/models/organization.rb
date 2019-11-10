class Organization < ApplicationRecord
    validates_presence_of :name, :presence => true
    validates_presence_of :pin, :presence => true
    validates :pin, length: { minimum: 6,
        too_short: ": %{count} characters is the minimum required" }
    validates :name, uniqueness: { case_sensitive: false }
    validates_presence_of :billing_email, :presence => true
    

    has_many :receipts

    scope :query_by_name, ->(name) { where("name == ?", name) }

    
end
