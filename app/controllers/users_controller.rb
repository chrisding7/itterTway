class UsersController < ApplicationController
    wrap_parameters format: []

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end


    def create
        new_user = User.create(user_params)
        render json: new_user, status: :created
    end
    
    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end


    private
    def user_params
        params.permit(:username, :display_name, :password_digest, :bio, :bio_translated)
    end



end
