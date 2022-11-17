class PostSerializer < ActiveModel::Serializer
  attributes :id, :user, :text, :text_translated
  has_many :comments
  has_one :user
end
