# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'roo'

#load the excel file
excel_file = Roo::Spreadsheet.open('./public/data/privateschoollist.xlsx')
#navigate to specific sheet
excel_file.sheet(0)
#select row range you wish to iterate over
2.upto(2779) do |line|
  name = excel_file.cell(line, 'A')
  address = excel_file.cell(line, 'B')
  city = excel_file.cell(line, 'C')
  state = excel_file.cell(line, 'D')
  zipcode = excel_file.cell(line, 'E')
  billing_email = 'billing@email.com'
  pin = '123456'
  Organization.create!(name: name, address: address, city: city, state: state, zipcode: zipcode, billing_email: billing_email, pin: pin)
end