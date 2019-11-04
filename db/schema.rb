# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_28_235022) do

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phone"
    t.string "pin"
    t.string "billing_email"
    t.string "audit_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "receipts", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone"
    t.string "secondary_name"
    t.string "secondary_id"
    t.string "category_label_1"
    t.decimal "category_amt_1", precision: 8, scale: 2
    t.string "category_label_2"
    t.decimal "category_amt_2", precision: 8, scale: 2
    t.string "category_label_3"
    t.decimal "category_amt_3", precision: 8, scale: 2
    t.string "category_label_4"
    t.decimal "category_amt_4", precision: 8, scale: 2
    t.string "category_label_5"
    t.decimal "category_amt_5", precision: 8, scale: 2
    t.string "category_label_6"
    t.decimal "category_amt_6", precision: 8, scale: 2
    t.string "category_label_7"
    t.decimal "category_amt_7", precision: 8, scale: 2
    t.string "category_label_8"
    t.decimal "category_amt_8", precision: 8, scale: 2
    t.string "category_label_9"
    t.decimal "category_amt_9", precision: 8, scale: 2
    t.string "category_label_10"
    t.decimal "category_amt_10", precision: 8, scale: 2
    t.string "notes"
    t.string "payment_method"
    t.string "payment_method_note"
    t.string "received_by"
    t.date "receipt_date"
    t.integer "organization_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
