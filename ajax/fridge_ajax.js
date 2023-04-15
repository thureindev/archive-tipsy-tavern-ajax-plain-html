$(document).ready(function(){
    // for fridge // #fridge-cocktail

    $("form#fridge-cocktail").on('submit', function(e){
        e.preventDefault();
        
        clear_data_display();
        
        $('#fridge-display').html('<h2>Coming Soon!</h2>');
    });
});