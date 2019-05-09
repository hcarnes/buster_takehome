Rails.application.routes.draw do
  root to: redirect('/companies')

  get 'companies', to: 'site#index'
  get 'companies/new', to: 'site#index'
  get 'companies/:id', to: 'site#index'
  get 'companies/:id/edit', to: 'site#index'


  namespace :api do
    get '/companies', to: 'companies#index'
  end
end