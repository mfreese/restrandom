class CreateCriteria < ActiveRecord::Migration[5.0]
  def change
    create_table :criteria do |t|

      t.timestamps
    end
  end
end
