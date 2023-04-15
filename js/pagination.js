const PAGE = new Page();


const show_pagination_controls = (selector, total_pages) => {

    if (total_pages > 1) {

        $(selector)
        .append(HTML_PAGINATION_CONTROLS);
        $(BTN_PREV_SELECTOR).on('click', show_previous);
        $(BTN_NEXT_SELECTOR).on('click', show_next);
    }
}

const show_page_content = () => {
    
    $(COCKTAIL_DISPLAY_SELECTOR)
    .append(HTML_PAGE_CONTENT);
}

const display_paginated_content = () => {
    
    clear_data_display();

    show_pagination_controls(PAGINATION_CONTROLS_SELECTOR, PAGE.totalPages);
    show_page_content();
    

    // preapre content
    let content_html = '<div class="some-container">';

    $.each(PAGE.pageContent, (index, item) => {
        content_html = content_html.concat(
        `
        <div class="card bg-dark text-white">
            <img src="${item.img}" class="card-img" alt="">
            <div class="card-img-overlay">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text"><i class="fa-solid fa-martini-glass"></i> ${item.cat}</p>
                <p class="card-text"><i class="fa-solid fa-whiskey-glass"></i> ${item.glass}</p>
            </div>
        </div>
        `);
    });
    content_html = content_html.concat('</div>');

    $(PAGE_CONTENT_SELECTOR).html(content_html);
    // ------------ ------------ ------------

    // show paginate controls


    //  //  update page num
    console.log(PAGE.pageIndicator);


    // let page_num_html = "(" + PAGE.pageIndicator.join('_') + ")";
    let page_num_html = '';

    $.each(PAGE.pageIndicator, (index, item) => {
        page_num_html = page_num_html.concat(`<button 
        id="goto_page_${item}" 
        type="button" 
        class="btn btn-${item == PAGE.pageNum? 'dark': 'outline-info'}">
        ${item}</button>`);
    });

    $(PAGE_INDICATOR_SELECTOR).html(page_num_html);
}

const show_next = () => {
    PAGE.next();
    display_paginated_content();
}

const show_previous = () => {
    PAGE.previous();
    display_paginated_content();
}

const show_goto_page = (num) => {
    PAGE.goto(num);
    display_paginated_content();
}
