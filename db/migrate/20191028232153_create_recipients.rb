class CreateRecipients < ActiveRecord::Migration[5.2]
  def change
    create_table :recipients do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :dependent_name
      t.string :dependent_id
      t.integer :organization_id
      t.timestamps
    end
  end
end
