class AcceptMailer < ActionMailer::Base
  default :from => 'RestaurantRandomizer.com'

  def accept_email(email, user_group)
    @email = email
    @group = user_group
    mail( :to => @email,
    :subject => ('Your choice has been Accepted!'))
  end
end
