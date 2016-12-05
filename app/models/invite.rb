class Invite < ApplicationRecord
belongs_to :user_group
has_many :invites
end
