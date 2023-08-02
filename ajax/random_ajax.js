$(document).ready(function(){
    
    // for surprise me button // #random-cocktail

    $("form#random-cocktail").on('submit', function(e){
        e.preventDefault();
        
        $.ajax({
            type: 'get',
            url: 'https://tipsy-tavern-server.onrender.com/cocktail/random',

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