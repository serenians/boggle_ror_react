Rails.application.routes.draw do
  root 'boggle#index'
  match '#path', to:'boggle#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
