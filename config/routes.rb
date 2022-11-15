Rails.application.routes.draw do
  
  resources :comments, only: [:show, :index, :create, :destroy]
  resources :posts, only: [:show, :index, :create, :destroy]
  resources :users, only: [:show, :index, :create, :update, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
