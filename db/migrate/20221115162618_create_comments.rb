class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :user, null: false, foreign_key: true
      # t.integer :commentable_id
      # t.string :commentable_type
      t.references :commentable, polymorphic: true, null: false
      t.string :text
      t.string :text_translated

      t.timestamps
    end
  end
end
