class Api::InvitesController < ApplicationController
  UserNotifier.send_signup_email(@user).deliver

  def show
    @invites = invites.find_by(invites: params[:invites])
    if @invites
    render json: @invites
    end



  end
