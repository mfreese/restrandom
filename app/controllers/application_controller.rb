class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  # respond_to :json

  # acts_as_token_authentication_handler_for User
  acts_as_token_authentication_handler_for User, if: lambda { |controller| controller.request.format.json? }

  def static

  end

  def invite_preview
      render template: 'application/invite', layout: false
  end

  def current_user
    if Rails.env == 'development'
      User.first
    else
      super
    end
  end
end
