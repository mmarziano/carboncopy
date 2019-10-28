class Organization < ApplicationRecord
    has_many :receipts
    has_many :recipients, through: :receipts
end
