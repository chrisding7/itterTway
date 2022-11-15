class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :text
      t.string :text_translated

      t.timestamps
    end
  end
end
