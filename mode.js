//Static input data

// list_01 = [         // we transfor the array in object
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     1,
//     2,
//     4,
//     2,
//     2,
//     1,
//     2,
//     1,
//     2,
//     3,
//     3,
// ];


// Create a function to input data by user 

function modeArray(userList){
    userList_Count = {};

    userList.map(                            //this method create a new equal array
        function (element) {
            if (userList_Count[element]){
                userList_Count[element] += 1;
            } else {
                userList_Count[element] = 1;
            }
        }
    );


    // Convert objects in array with object wntries, and sort method with function to regroup
    // 
    userList_array = Object.entries(userList_Count).sort(
        function (valueAcum, newValue){
            return valueAcum[1] - newValue[1];
        }
    );               

    mode = userList_array[userList_array.length - 1];
    return mode
    }