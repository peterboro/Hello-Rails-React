Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  root to: 'home#index'

  get '/greeting', to: 'home#index'
  
  namespace :api do
    namespace :v1 do
      resources :messages
    end
  end
end
