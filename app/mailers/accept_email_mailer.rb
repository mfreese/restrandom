class AcceptEmailMailer < ActionMailer::Base
  default :from => 'Team@RestaurantRandomizer.com'

  def accept_email(email, user_group)
    @email = email
    @user_group = user_group
    mail( :to => @email,
    :subject => ('Your choice has been Accepted!'))
  end
end
