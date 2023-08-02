$(document).ready(function(){
    
    //  //  Cocktail form submit
    $(FORM_FIND_COCKTAIL_SELECTOR).on('submit', function(e){
        e.preventDefault();

        const promptText = $(INPUT_C_NAME_SELECTOR).val()
                        .trim()
                        .replace(/\s/g, ',')
                        .replace(/,{2,}/g, ',');

        $.ajax({
            type: 'get',
            url: 'http://localhost:8080/cocktail/prompt',

            data: {    
                "promptField": "c_name",

                // trim whitespaces and replace in-betweens with commas ','
                "promptText": promptText
            },
            dataType: 'json'
        })
        .done(function(res_cocktails){

            // TODO // check relavancy and edit response.
            const sortedData = sort_by_relavancy(res_cocktails, promptText.split(','));

            PAGE.update_data(sortedData);
            
            display_paginated_content();
        });
    });

    
});