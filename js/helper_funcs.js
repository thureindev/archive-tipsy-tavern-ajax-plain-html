
// fixing
const clear_data_display = () => {

    dataDisplayWrapper = $(DATA_DISPLAY_SELECTOR).children();

    $.each(dataDisplayWrapper, (index, item) => {
        item.innerHTML = '';
    })
}

const sort_by_relavancy = (data, sortKeys) => {

    console.log(typeof(sortKeys));
    console.log(sortKeys);
    
    console.log("START ^^^^^^^^^^^^^^^")
    console.log(data);

    const LEN = data.length;

    for (let i = 0; i < LEN; i ++) {
        data[i].sortingScores = 0;
    }

    console.log("Score initiated vvvvvvvvvvvvvvvvvvvvvvvvvvv");
    console.log(data);
    console.log('---------------- -------------------');

    for (let i = 0; i < LEN; i ++) {

        sortKeys.forEach(ele => {
            
            console.log('started matching for ' + ele);

            if (data[i].name.match(new RegExp(`\\b${ele.name}\\b`, 'i'))) {
                
                data[i].sortingScores = data[i].sortingScores + 1;
            }
            else {
                
                data[i].sortingScores = data[i].sortingScores - 1;
            }
            console.log(data[i].sortingScores)

        });
    }
    console.log('---------------- -------------------');


    // sort data sy sorting scores
    data = data.sort((a, b) => {
        if (a.sortingScores > b.sortingScores) {
            return -1;
        }
    });

    console.log("before ^^^^^^^^^^^^^^^")
    console.log(data);

    return data;
}
