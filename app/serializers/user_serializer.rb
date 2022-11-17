class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :display_name, :password_digest, :bio, :bio_translated
  has_many :comments
  has_many :posts
end
