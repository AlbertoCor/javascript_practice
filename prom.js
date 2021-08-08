
//Data input

// const list_01 = [
//     100,
//     200,
//     300,
//     500,
// ];


//Formula function


function calculateMeanAritmetic(list){
    // 1 way to create a Prom
    // sumList = 0;
    // for (i = 0; i < list.length; i++)
    // {
    //     sumList = sumList + list[i];
    // }

    sumList = list.reduce(                          // Method reduce make a sum of elements 
        function(valueAcumulated = 0, newElement){
            return valueAcumulated + newElement
        }
    );

    promList = sumList / list.length;

    return promList;
}