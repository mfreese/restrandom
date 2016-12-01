# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do

    mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
    devise_for :users, controllers: {
        registrations: 'users/registrations',
        sessions: 'users/sessions'
    } do
        post '/users' => 'users/registrations#create', as: :sign_up, constraints: {format: /(json)/}
    end

    namespace :api do
      resources :invites
      resources :placehistories
      resources :pastplaces
      resources :choices
      resources :selections
      resources :criteria
    end

    root 'homepage#static'
    get '/choice' => 'application#static'
    get '/criteria' => 'application#static'
    get '/selection' => 'application#static'
    get '/pastplaces' => 'application#static'
    get '/placehistory' => 'application#static'


end
