$(document).ready(function(){
    
    // for surprise me button // #random-cocktail

    $("form#random-cocktail").on('submit', function(e){
        e.preventDefault();
        
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/cocktail/random',

            data: {
                count: 4
            },
            dataType: 'json'
        })
        .done(function(res_item){
            
            PAGE.update_data(res_item);

            display_paginated_content();
        });
    });

});