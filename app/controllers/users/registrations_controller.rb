class Users::RegistrationsController < Devise::RegistrationsController
before_action :configure_sign_up_params, only: [:create]
before_action :configure_account_update_params, only: [:update]

# respond_to :json
prepend_before_filter :require_no_authentication, :only => [:create ]
# def create
#   user = User.new(sign_up_params)
#   if user.save
#     render :json => user, :status=>201
#     return
#   else
#     warden.custom_failure!
#     render :json => user.errors, :status=>422
#   end
# end

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  # def create
  #   super
  # end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   user = User.find_by(authentication_token: params[:user_token])
  #   if user.update_without_password(accout_update_params.reject { |a, b| b.blank?})
  #     render json: user
  #   else
  #     warden.custom_failure!
  #    render json: user.errors.full_messages, status: 422
  #   end
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :address])
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:email, :password, :address])
  end

  # The path used after sign up.
  def after_sign_up_path_for(resource)
    # super(resource)
    url_for('/criteria')
  end

  def update_resource(resource, params)
    resource.update_without_password(params)
  end

  def after_update_path_for(resource)
    url_for('/criteria')
  end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
