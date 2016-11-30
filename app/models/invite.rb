class Invite < ApplicationRecord
  has_many :members
  has_many :user_groups, through: :members
end
