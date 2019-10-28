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
    t.string "address_1"
    t.string "address_2"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phone"
    t.string "billing_email"
    t.string "audit_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "receipts", force: :cascade do |t|
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
    t.integer "organization_id"
    t.integer "recipient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recipients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "dependent_name"
    t.string "dependent_id"
    t.integer "organization_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
