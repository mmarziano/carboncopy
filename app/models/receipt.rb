class Receipt < ApplicationRecord
    validates_presence_of :name, :presence => true
    validates_presence_of :email, :presence => true
    before_save { self.email = email.downcase }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX }
    validates_presence_of :category_label_1, :presence => true
    validates_presence_of :category_amt_1, numericality: true
    validates_presence_of :received_by, :presence => true

    belongs_to :organization
end
