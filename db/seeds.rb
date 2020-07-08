# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
user1 = User.create!(first_name: "Caspar", last_name: "Bayliss", email: "user1@mygmail.com",  password: "fishaldro", password_confirmation: "fishaldro")
user1.pets.create(name: Faker::Name.first_name, species: "Dog", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Lost", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Cat", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Lost", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Cat", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Lost", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Dog", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Lost", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Dog", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Lost", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Cat", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Lost", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Dog", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Lost", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Cat", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Found", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Dog", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Found", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Dog", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Found", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Cat", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Reunited", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Dog", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Reunited", date: Faker::Date.backward(days: 30))
user1.pets.create(name: Faker::Name.first_name, species: "Dog", age: Faker::Number.between(from: 1, to: 15), description: Faker::Lorem.sentence, location: "GU8 5AQ", status: "Reunited", date: Faker::Date.backward(days: 30))
