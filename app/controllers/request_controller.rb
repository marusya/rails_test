class RequestController < ApplicationController
  protect_from_forgery with: :null_session # TODO разобраться с токеном в форме

  def create
    text = params[:text] # получаем текст из запроса
    sentence = self.createNew(text) # пишем текст в хранилище, получаем созданный экземпляр модели
    created = sentence ? sentence.created_at.strftime('%d.%m.%Y %H:%M') : nil # форматируем дату
    count = self.getCount

    # отдаём в ответ данные
    respond_to do |format|
      format.json { render :json => {
        result: sentence ? true : false,
        createdTime: created, # время создания записи
        countString: t('welcome.sentences', :count => count)
      }}
    end
  end

  # Количество записей
  protected
  def getCount
    Sentence.count
  end

  # Создание новой записи
  protected
  def createNew(text)
    Sentence.create({text: text})
  end

end