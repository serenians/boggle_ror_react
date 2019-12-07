Rails.application.routes.draw do
  scope '/api' do
    get 'scores/index'
    get 'boggle/index'
    get 'boggle/start'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
