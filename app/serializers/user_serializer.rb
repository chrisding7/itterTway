class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :display_name, :password_digest, :bio, :bio_translated
  has_many :posts
  has_many :comments
end
