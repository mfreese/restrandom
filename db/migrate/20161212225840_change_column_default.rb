class ChangeColumnDefault < ActiveRecord::Migration[5.0]
  def change
    change_column_default :user_groups, :reject_counter, 0
    change_column_default :user_groups, :accept_counter, 0

  end
end
