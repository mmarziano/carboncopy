Rails.application.routes.draw do
  resources :organizations
  resources :recipients
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index' 
  devise_for :users

#   devise_for :users do
#     get "signup", to: "devise/registrations#new"
#     get "login", to: "devise/sessions#new"
#     get "logout", to: "devise/sessions#destroy"
#  end
end
