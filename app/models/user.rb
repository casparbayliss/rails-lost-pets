class User < ApplicationRecord
  include AlgoliaSearch
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  has_many :pets, dependent: :destroy
  algoliasearch per_environment: true do
    attribute :first_name, :last_name
    searchableAttributes ['first_name', 'last_name']
  end
end
