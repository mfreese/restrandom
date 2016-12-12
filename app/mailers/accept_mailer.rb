class AcceptMailer < ActionMailer::Base
  default :from => 'Team@RestaurantRandomizer.com'

  def accept_email(user, user_group)
    @user = user
    @user_group = user_group
    mail( :to => @user.email,
    :subject => ('Your choice has been Accepted!'))
  end
end
