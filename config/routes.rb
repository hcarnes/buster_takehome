Rails.application.routes.draw do
  root to: redirect('/companies')

  namespace :api do
    resources :companies
  end

  get '*path', to: 'site#index'
end