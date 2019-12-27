class ReceiptSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :account_id, :description, :category_amt_1, :notes, :payment_method, :payment_method_note, :received_by, :receipt_date, :organization_id
  belongs_to :organization
end
