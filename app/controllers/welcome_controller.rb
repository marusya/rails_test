class WelcomeController < ApplicationController

  before_action :set_locale

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def index
    render 'index', :locals => {:model => Sentence, :count => Sentence.count}
  end

end
