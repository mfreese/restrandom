class UserGroupsController < ApplicationController

def create
  @group = UserGroup.new(params_id)
  respond_to do |format|
    if @group.save
    UserNotifierMailer.sample_email(@group).deliver
      format.json { render :show, status: :created, location: @group }
    else
      format.json { render json: @group.errors, status: :unprocessable_entity }
    end
  end

  def invites_update
    invites.update
  end

  def reject_invite
    reject_counter
  end
end
end

private
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
