class CreateUserGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :user_groups do |t|
      add_reference :user_group_id
      t.timestamps
    end
  end
end
