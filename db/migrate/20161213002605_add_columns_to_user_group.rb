class AddColumnsToUserGroup < ActiveRecord::Migration[5.0]
  def change
    add_column :user_groups, :search_food, :string
    add_column :user_groups, :search_price, :string
    add_column :user_groups, :search_radius, :string
  end
end
