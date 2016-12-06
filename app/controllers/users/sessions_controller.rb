class Users::SessionsController < Devise::SessionsController
  # respond_to :json
  # prepend_before_filter :require_no_authentication, :only => [:create ]
  # def create
  #  resource = User.find_for_database_authentication(:email=>params[:user][:email])
  #  if resource.nil?
  #    render :json=> {:success=>false, :message=>"Error with your login or password"}, :status=>401
  #  end
  #  if resource.valid_password?(params[:user][:password])
  #    sign_in("user", resource)
  #    render :json=> resource
  #  else
  #    render :json=> {:success=>false, :message=>"Error with your login or password"}, :status=>401
  #  end
  # end

# before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
  end
end
