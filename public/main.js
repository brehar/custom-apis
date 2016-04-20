'use strict';

$(function() {
    $('.math-form').submit(processMath);
    $('.gravatar-form').submit(processGravatar);
    $('.sentence-form').submit(processSentence);
    $('.age-form').submit(processAge);
    $('.magic-form').submit(processMagic);
    $('.profanity-form').submit(processProfanity);
    $('.spelling-form').submit(processSpelling);
});

function processMath(event) {
    event.preventDefault();

    var operand1 = $('.operand1').val();
    var operand2 = $('.operand2').val();
    var operation = $('.operator').val();

    $.get(`/math/${operation}/${operand1}/${operand2}`).done(function(data) {
        $('.math-result').text(data);
    }).fail(function(error) {
        console.log('error:', error);
    });
}

function processGravatar(event) {
    event.preventDefault();

    var email = $('.gravatar-email').val();
    
    $.get(`/gravatar/${email}`).done(function(data) {
        var imgUrl = `http://www.gravatar.com/avatar/${data}`;
        $('.gravatar-result').attr('src', imgUrl);
    }).fail(function(error) {
        console.log('error:', error);
    });
}

function processSentence(event) {
    event.preventDefault();

    var sentence = $('.sentence-input').val();

    $.get(`/sentence/${sentence}`).done(function(data) {
        var results = JSON.parse(data);

        $('.word-count').text(results.words);
        $('.character-count').text(results.characters);
        $('.average-word-length').text(results.avgLength);
    }).fail(function(error) {
        console.log('error:', error);
    });
}

function processAge(event) {
    event.preventDefault();

    var birthdate = $('.age-input').val();

    $.get(`/age/${birthdate}`).done(function(data) {
        $('.age-result').text(data);
    }).fail(function(error) {
        console.log(error);
    });
}

function processMagic(event) {
    event.preventDefault();

    $.get('/magic').done(function(data) {
        $('.magic-result').text(data);
    }).fail(function(error) {
        console.log(error);
    });
}

function processProfanity(event) {
    event.preventDefault();

    var sentence = $('.profanity-input').val();

    $.get(`/profanity/${sentence}`).done(function(data) {
        $('.profanity-result').text(data);
    }).fail(function(error) {
        console.log(error);
    });
}

function processSpelling(event) {
    event.preventDefault();

    var sentence = $('.spelling-input').val();

    $.get(`/spelling/${sentence}`).done(function(data) {
        $('.spelling-result').text(data);
    }).fail(function(error) {
        console.log(error);
    });
}