class CreateReceipts < ActiveRecord::Migration[5.2]
  def change
    create_table :receipts do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :account_id
      t.string :description
      t.decimal :category_amt_1, :precision => 8, :scale => 2
      t.string :notes
      t.string :payment_method
      t.string :payment_method_note
      t.string :received_by
      t.date :receipt_date
      t.integer :organization_id
      t.timestamps
    end
  end
end
