
puts "deleting seeds"

Comment.destroy_all
Post.destroy_all
User.destroy_all


#create Users
puts "creating users"
User.create(username: "chris_ding", display_name: "Chris Ding", password_digest: "12345", bio: "Went to Berkeley", bio_translated: "Entway otay Erkleybay")
User.create(username: "chris_mann", display_name: "Chris Mann", password_digest: "12345", bio: "Went to University of Hawaii", bio_translated: "Entway otay universityay ofbay awaiihay")
User.create(username: "justin_saborouh", display_name: "Justin Saborouh", password_digest: "12345", bio: "Went to Somewhere", bio_translated: "Entway otay omewheresay")

puts "creating posts" 
#create Posts
20.times do
    Post.create(user_id: User.all.sample.id, text: Faker::Lorem.sentence(word_count: 10), text_translated: Faker::Lorem.sentence(word_count: 10))
end

puts "creating comments"
#create Comments
20.times do
    Comment.create(user_id: User.all.sample.id, commentable_type: "Post", commentable_id: Post.all.sample.id, text: Faker::Lorem.sentence(word_count: 10), text_translated: Faker::Lorem.sentence(word_count: 10))
end

puts "done seeding"