Rails.application.routes.draw do
  resources :receipts
  resources :organizations

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index' 
  get 'search', to: 'organizations#search', as: "search"
  get 'validate', to: 'organizations#validate', as: "validate"

end
