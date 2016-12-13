class AddColumToUserGroups < ActiveRecord::Migration[5.0]
  def change
    add_column :user_groups, :accept_counter, :integer
  end
end
