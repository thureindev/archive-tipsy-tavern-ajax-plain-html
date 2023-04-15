// const COCKTAIL_FORM_SELECTOR = 'form#find-cocktail';
// const COCKTAIL_PROMPT_SELECTOR = 'input[name=promptText]';


// ---------------------------------------
const DATA_DISPLAY_SELECTOR = '#data-display'
const PAGINATION_CONTROLS_SELECTOR = '#pagination-controls'

const COCKTAIL_DISPLAY_SELECTOR = '#cocktail-display';
const SPECIAL_COCKTAIL_DISPLAY_SELECTOR = '#special-cocktail-display';
const FRIDGE_DISPLAY_SELECTOR = '#fridge-display';

const BTN_COCKTAIL_SEARCH_SELECTOR = '#btn-cocktail-search';
const BTN_INGREDIENT_SEARCH_SELECTOR = '#btn-ingredient-search';

const FORM_FIND_COCKTAIL_SELECTOR = '#find-cocktail';
const FORM_FIND_INGREDIENT_SELECTOR = '#ingredient-cocktail';

const INPUT_C_NAME_SELECTOR = '#prompt-c-name';
const INPUT_INGREDIENT_SELECTOR = '#prompt-ingredient';

const BTN_RANDOM_COCKTAIL_SELECTOR = '#random-cocktail';


/* PAGINATION CONSTANTS */
//  //  item limit per page 
const LIMIT_PER_PAGE = 4;

/* PAGINATION DISPLAY */
const BTN_PREV_SELECTOR = '#page-previous';
const BTN_NEXT_SELECTOR = '#page-next';
const PAGE_INDICATOR_SELECTOR = '#page-indicator';
const PAGE_CONTENT_SELECTOR = '#page-content';

const HTML_PAGINATION_CONTROLS = `
    <button id="${BTN_PREV_SELECTOR.slice(1)}" type="button" class="btn btn-outline-info">Previous</button>

    <span id='${PAGE_INDICATOR_SELECTOR.slice(1)}'>Page #</span>

    <button id="${BTN_NEXT_SELECTOR.slice(1)}" type="button" class="btn btn-outline-info">Next</button>
    <hr>`;

const HTML_PAGE_CONTENT = `
    <div id='${PAGE_CONTENT_SELECTOR.slice(1)}'>Content</div>`;

