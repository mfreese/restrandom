class UserNotifierMailer < ActionMailer::Base
  default :from => 'Team@RestaurantRandomizer.com'

  def send_signup_email(user)
    @user = user
    mail( :to => @user.email,
    :subject => 'Thanks for signing up for our amazing app' )
  end

  def send_choice_email(invite)
    @invite = invite
    mail( :to => @invite.email,
    :subject => ('You have been given a choice'))
  end
end
