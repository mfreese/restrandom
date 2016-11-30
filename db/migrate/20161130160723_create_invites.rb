class CreateInvites < ActiveRecord::Migration[5.0]
  def change
    create_table :invites do |t|
      t.string :email
      t.boolean :accepted, default: false
      t.boolean :rejected, default: false

      t.timestamps
    end
  end
end
