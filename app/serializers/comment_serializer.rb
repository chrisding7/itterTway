class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commentable_id, :commentable_type, :text, :text_translated
  has_one :user
  has_one :post
end
