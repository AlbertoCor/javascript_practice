
// Data input for this we add a sort the imput 
// and create a function of whole code


// Declare a var to static input to test code

// const userList = [
//     1000,
//     40000,
//     300,
//     5000000000,
//     99999,
//     500
// ];


function meanUserList(userList) {
    // Function to sort numbers from lower to higher
    sortedList = userList.sort(function(a,b){
        return a-b;
    });


    // ParseInt function round values, delete floating number retunrn an int
    meanList = parseInt(userList.length/2);


    // Verify is array pair using a module divisor of 2 (pair).
    function itsPair(num){
        if (num % 2 === 0) {
            return true
        } else {
            return false
        }
    }


    // Function from prom. to return prom of middle pair array
    function calculateMeanAritmetic(list){
        sumList = list.reduce(                          // Method reduce make a sum of elements 
            function(valueAcumulated = 0, newElement){
                return valueAcumulated + newElement
            }
        );
        promList = sumList / list.length;
        return promList;
    }


    // Call verify pair method to take elements and call calculation function to get prom
    if (itsPair(userList.length)) {
        element_01 = sortedList[meanList - 1];
        element_02 = sortedList[meanList];

        prom = calculateMeanAritmetic([
            element_01,
            element_02,
        ]);

        mean = prom;

    } else {
        mean = sortedList[meanList];
    }

    // Return conditional comparison about array is or not a pair or unpair array
    return mean;
    }