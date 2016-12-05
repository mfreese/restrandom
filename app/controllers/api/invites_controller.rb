class Api::InvitesController < ApplicationController
    def invites
    end

    UserNotifier.send_signup_email(@user).deliver
end
