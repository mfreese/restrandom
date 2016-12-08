class AddColumnToUserGroup < ActiveRecord::Migration[5.0]
  def change
    add_column :user_groups, :restaurant_name, :string
    add_column :user_groups, :address, :string
    add_column :user_groups, :url, :string
    add_column :user_groups, :phone, :string
    add_column :user_groups, :user_id, :integer
  end
end
