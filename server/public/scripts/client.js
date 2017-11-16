console.log('client.js has been loaded');

$(document).ready(function(){
    console.log('JQ has been loaded');
    getAllQuotes();

    $('#newQuoteButton').on('click', function(){
        console.log('something');
        var quoteInput = $('#inputBoxOne').val();
        var authorInput =$('#inputBoxTwo').val();
        $.ajax({
            method: 'POST',
            url: '/quote/new',
            data: {quote_to_add: quoteInput, author_to_add: authorInput},
            success: function(response){
                console.log('new quote response', response);
                getAllQuotes();
            }
        })
    });


    $.ajax({
        method: 'GET',
        url: '/quote/random',
        success: function(response) {
            console.log('response', response);
            $('p').append(response.quote)
        }
        // error: function(error) {
        //     console.log('There was an error getting a random quote', quote)
        // }
    })

    $.ajax({
        method: 'GET',
        url: '/quote',
        success: function(response) {
            console.log('first quote response', response);
            $('p').text(response.quote)
        }
    });

    $.ajax({
        method: 'GET',
        url: '/quote/all',
        success: function(response) {
            for (var i = 0; i < response.length; i++) {
                // $('ul').append('<li>' + response[i].quote + '</li>');                  
            }
            }
        })
    });

    



function getAllQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quote/all',
        success: function(response){
            console.log('all quotes array', response);
            $('ul').html('');
            for (var i = 0; i < response.length; i++) {
                $('ul').append('<li>' + response[i].quote + '</li>');                  
            }
        }
    })
}


