class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :display_name
      t.string :password_digest
      t.string :bio
      t.string :bio_translated

      t.timestamps
    end
  end
end
