// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

// Сохранение sentence
function createSentence(text) {
    $.ajax('/request/create', {method: "POST", data: {text: text}})
        .done(function (responseData) {
            if (responseData.result === true) { // в параметре result true/false результат сохранения sentence
                $("#inputData").val(''); // обнуляем поле ввода
                $("#time_inner").append('<li>' + responseData.createdTime + '</li>'); // добавляем время создания запроса в список #time_inner
                $("#count").text(responseData.countString); // выводим количество запросов
            } else {
                alert("Ваш текст не был сохранён.");
            }
        })
        .fail(function () {
            alert('Ответ не получен.');
        });
}