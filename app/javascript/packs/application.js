// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import $ from 'jquery'
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

window.$ = $;

$(document).ready(function () {
    $(".form").submit(function (event) {
        var formData = {
            name: $("#name").val(),
        };

        $.ajax({
            type: "POST",
            url: '/users/',
            data: formData,
            dataType: 'JSON',
        }).done(function () {
            ('#new-div').append('<div id="my_posts"></div>');
        });
        event.preventDefault();
    });
});