class Recipient < ApplicationRecord
    has_many :receipts
    belongs_to :organization
end
