class User < ApplicationRecord
  include AlgoliaSearch
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  has_many :pets, dependent: :destroy
  # searchkick word_start: [:first_name, :last_name]
  algoliasearch do 
    attributes :first_name, :last_name
  end
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged
  def slug_candidates
    [
      [:first_name, :last_name],
    ]
  end
end
