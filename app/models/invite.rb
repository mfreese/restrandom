class Invite < ApplicationRecord
belongs_to :user_group
has_secure_token
after_create :invites


  def invites
      UserNotifierMailer.send_choice_email(self).deliver
  end


end
