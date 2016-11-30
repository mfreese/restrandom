class CreatePastplaces < ActiveRecord::Migration[5.0]
  def change
    create_table :pastplaces do |t|

      t.timestamps
    end
  end
end
