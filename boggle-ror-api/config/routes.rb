Rails.application.routes.draw do
  scope '/api' do
    # create a new stateless boggle board layout and shuffle it
    get 'board', to: "boggle#index"

    # post a word to the boggle game - will verify if it is a legitimate word
    # could use get v1/words/:id but thinking of posting board layout
    # for validation purposes such as letters exist on board and
    # letters are adjacent to each other.
    post 'words', to: "words#create"

  end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
