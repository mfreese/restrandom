class UserGroupsController < ApplicationController

def reject_counter
@group = UserGroup.find(params_id)
@group.reject_counter += 1
if group.reject_counter <= 2
  @group.each do |email|
@group.invites << Invite.new(email: email)
elsif @group.reject_counter == 3 
  @group.each do |email|
@group.invites << Invite.new(email: email)
end
end
end



end


end
