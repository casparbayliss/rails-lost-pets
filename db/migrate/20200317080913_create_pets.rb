class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.integer :age
      t.text :description
      t.date :date
      t.string :location
      t.string :status

      t.timestamps
    end
  end
end
