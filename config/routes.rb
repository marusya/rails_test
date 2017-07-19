Rails.application.routes.draw do

  root 'welcome#index'
  get 'welcome/index'
  get 'welcome/getTime'
  post 'request/create'

end
