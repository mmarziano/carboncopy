class CreateReceipts < ActiveRecord::Migration[5.2]
  def change
    create_table :receipts do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :secondary_name
      t.string :secondary_id
      t.string :category_label_1
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
