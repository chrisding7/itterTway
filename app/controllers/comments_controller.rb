class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment
    end

    def create
        new_comment = Comment.create(comment_params)
        render json: new_comment, status: :created
    end
    
    # def update
    #     post = Post.find(params[:id])
    #     post.update!(post_params)
    #     render json: post, status: :accepted
    # end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end


    private
    def comment_params
        params.permit(:user_id, :commentable_type, :commentable_id, :text, :text_translated)
    end

    # t.bigint "user_id", null: false
    # t.string "commentable_type", null: false
    # t.bigint "commentable_id", null: false
    # t.string "text"
    # t.string "text_translated"
    # t.datetime "created_at", precision: 6, null: false
    # t.datetime "updated_at", precision: 6, null: false
    # t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable"
    # t.index ["user_id"], name: "index_comments_on_user_id"

end
