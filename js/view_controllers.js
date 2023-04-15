function searchBarToggleSelected() {
    
    $(FORM_FIND_COCKTAIL_SELECTOR).toggleClass('selected');
    $(FORM_FIND_INGREDIENT_SELECTOR).toggleClass('selected');
    $(BTN_COCKTAIL_SEARCH_SELECTOR).toggleClass('selected');
    $(BTN_INGREDIENT_SEARCH_SELECTOR).toggleClass('selected');
}

$(document).ready(function(){

    $(FORM_FIND_COCKTAIL_SELECTOR).addClass('selected');
    $(BTN_COCKTAIL_SEARCH_SELECTOR).addClass('selected');

    //  //  toggle cocktail search by name and search by ingredients
    $(BTN_COCKTAIL_SEARCH_SELECTOR).on('click', function(e) {
        searchBarToggleSelected();
    });
    $(BTN_INGREDIENT_SEARCH_SELECTOR).on('click', function(e) {
        searchBarToggleSelected();
    });

    //  //  click on searchbar auto selects on selected searchbar input
    $('#tipsy-search-bar').on('click', function(e) {
        $('.searchBox.selected .searchInput').focus();
    });
    
    //  //  click on btn random
    $(BTN_RANDOM_COCKTAIL_SELECTOR).on('click', function(e) {
        $(BTN_RANDOM_COCKTAIL_SELECTOR).focus();
    })
});