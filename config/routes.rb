Rails.application.routes.draw do
  root 'site#index'
  
  namespace :api do
    get '/companies', to: 'companies#index'
  end
end