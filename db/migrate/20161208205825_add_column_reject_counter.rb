class AddColumnRejectCounter < ActiveRecord::Migration[5.0]
  def change
    add_column :user_groups, :reject_counter, :integer
  end
end
