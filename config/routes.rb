Rails.application.routes.draw do
  devise_for :users
  root to: 'pets#index'
  resources :pets
  resources :users, only: [:show, :edit, :update]
  get '/lostpets', to: 'pets#lost_all', as: 'all_lost_pets'
  get '/foundpets', to: 'pets#found_all', as: 'all_found_pets'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
