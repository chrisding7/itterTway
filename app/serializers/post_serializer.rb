class PostSerializer < ActiveModel::Serializer
  attributes :id, :user, :text, :text_translated
end
