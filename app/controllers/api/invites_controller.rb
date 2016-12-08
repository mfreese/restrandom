class Api::InvitesController < ApplicationController
  UserNotifier.send_signup_email(@user).deliver
end
