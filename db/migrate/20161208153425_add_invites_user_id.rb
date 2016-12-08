class AddInvitesUserId < ActiveRecord::Migration[5.0]
  def change
    add_column :invites, :user_group_id, :integer

  end
end
