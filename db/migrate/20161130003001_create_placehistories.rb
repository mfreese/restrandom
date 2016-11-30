class CreatePlacehistories < ActiveRecord::Migration[5.0]
  def change
    create_table :placehistories do |t|

      t.timestamps
    end
  end
end
