class AcceptEmailController < ApplicationController

  private

  def accept_counter
  @group = UserGroup.find(params_id)
  @group.accept_counter = 0
  @group.accept_counter += 1
  if group.accept_counter == group.invites.count
    @group.each do |email|
  AcceptMailer.accept_email(email, @group)
  end
  end
  end
end
