class CreateReceipts < ActiveRecord::Migration[5.2]
  def change
    create_table :receipts do |t|
      t.string :category_label_1
      t.decimal :category_amt_1, :precision => 8, :scale => 2
      t.string :category_label_2
      t.decimal :category_amt_2, :precision => 8, :scale => 2
      t.string :category_label_3
      t.decimal :category_amt_3, :precision => 8, :scale => 2
      t.string :category_label_4
      t.decimal :category_amt_4, :precision => 8, :scale => 2
      t.string :category_label_5
      t.decimal :category_amt_5, :precision => 8, :scale => 2
      t.string :category_label_6
      t.decimal :category_amt_6, :precision => 8, :scale => 2
      t.string :category_label_7
      t.decimal :category_amt_7, :precision => 8, :scale => 2
      t.string :category_label_8
      t.decimal :category_amt_8, :precision => 8, :scale => 2
      t.string :category_label_9
      t.decimal :category_amt_9, :precision => 8, :scale => 2
      t.string :category_label_10
      t.decimal :category_amt_10, :precision => 8, :scale => 2
      t.string :notes
      t.string :payment_method
      t.string :payment_method_note
      t.string :received_by
      t.date :receipt_date
      t.integer :organization_id
      t.integer :recipient_id
      t.timestamps
    end
  end
end
