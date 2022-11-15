class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    def create
        new_post = Post.create(post_params)
        render json: new_post, status: :created
    end
    
    # def update
    #     post = Post.find(params[:id])
    #     post.update!(post_params)
    #     render json: post, status: :accepted
    # end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end


    private
    def post_params
        params.permit(:user_id, :text, :text_translated)
    end

end
