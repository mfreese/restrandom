Rails.application.routes.draw do
  resources :choices
  resources :selections
  resources :criteria
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root 'homepage#static'
get '/choice' => 'choice#choice'


end
