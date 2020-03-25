class Pet < ApplicationRecord
  geocoded_by :location
  after_validation :geocode, if: :will_save_change_to_location?
  belongs_to :user
  has_many_attached :photos
  validates_presence_of :description, :species
  include PgSearch::Model
  pg_search_scope :global_search,
    against: [:name, :species, :date, :location],
    associated_against: {
      user: [:first_name, :last_name]
    },
    using: {
      tsearch: { any_word: true }
    }
end
