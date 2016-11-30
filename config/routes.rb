Rails.application.routes.draw do
  resources :user_groups
  resources :invites
  resources :placehistories
  resources :pastplaces
  resources :choices
  resources :selections
  resources :criteria
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  } do
    post '/users' => 'users/registrations#create', as: :sign_up, constraints: {format: /(json)/}
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root 'homepage#static'
get '/choice' => 'choice#choice'
get '/criteria' => 'criteria#criteria'
get '/selection' => 'selection#selection'
get '/pastplaces' => 'pastplaces#pastplaces'
get '/placehistory' => 'placehistory#placehistory'


end
