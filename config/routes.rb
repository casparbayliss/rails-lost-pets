Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'conversations/index'
  devise_for :users
  root to: 'pets#index'
  resources :pets
  resources :users, only: [:show, :edit, :update]
  resources :conversations, only: [:index, :create, :show] do
    resources :messages, only: [:index, :create]
  end
  get '/lostpets', to: 'pets#lost_all', as: 'all_lost_pets'
  get '/foundpets', to: 'pets#found_all', as: 'all_found_pets'
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

