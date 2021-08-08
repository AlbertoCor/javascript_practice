
salaryMx = mexico.map(
    function(person){
        return person.salary;
    }
);

salaryMxSorted = salaryMx.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

// Helpers
function itsPair(num){
// if statement below return default true or false
    // if (num % 2 === 0 ){
    //     return true;
    // } else {
    //     return false;
    // }
    return (num % 2 === 0);
}

// Function from prom. to return prom of middle pair array
function calculateMeanAritmetic(list){
    sumList = list.reduce(                          // Method reduce make a sum of elements 
        function(valueAcumulated = 0, newElement){
            return valueAcumulated + newElement;
        }
    );
    promList = sumList / list.length;
    return promList;
}


// function for calculate middle point of array and return middle value
function meanSalary (list){
    half = parseInt(list.length / 2);

    if (itsPair(list.lenght)){
        personHalf1 = list[half -1];
        personHalf2 = list[half];

        mean = calculateMeanAritmetic(personHalf1, personHalf2);
        return mean;
    } else {
        personHalf = list[half];
        return personHalf;
    }
}

// Top 10% mean
spliceStart = (salaryMxSorted.length * 90) / 100;
spliceCount = salaryMxSorted.length - spliceStart;


salaryTop10 = salaryMxSorted.splice(
    spliceStart,
    spliceCount,
);


generalMeanMX = meanSalary(salaryMxSorted)
top10Mean = meanSalary(salaryTop10)

console.log({
    generalMeanMX,
    top10Mean,
});