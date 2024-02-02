// Code your solution in this file!
const array = ['Antonia', 'Nuru', 'Amari', 'Mo'] //an array containingnames of drivers (4 drivers)
const returnFirstTwoDrivers = function(){ //when called, will return an array (the first two drivers)
    if (array.length < 2) { //if array contains less than two drivers, will return the whole array because we need 2 drivers in an array to return
        return array; 
    } else { //otherwise, non destructively (.slice) take the first two elements of the array using 0 as the first parameter to start at first element and 2 as the second parameter to end at index 1 (2-1)
        return array.slice(0, 2);
    }
}
const returnLastTwoDrivers = function(){ // when called, will return an arrray (the last two drivers)
    if (array.length < 2) {   //if array contains less than two drivers, will return the whole array because we need 2 drivers in an array to return
        return array; 
    } else {
        return array.slice((array.length-2)); // otherwise, non-destructively take the last two elements using .slice method with only one parameter which is the starting indicator, array.length-2 (if array has 4 elements(4-2), will start at 3rd element, Amari, and by default will end till the last element, returning ['Amari', 'Mo'])
    }
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; //puts the two functions returnFirstTwoDrivers and returnLastTwoDrivers in an array, not being called yet.

const createFareMultiplier = function(int){ //function that takes int as an argument which in this case is the multiplier. this function returns another function inside it which multiplies an input fare and the multiplier int. This function is made to be used repetitively if there will be different inputs of fares and int (multipliers) 
    return (function(fare){
        return fare*int;
    });
}

const fareDoubler = createFareMultiplier(2); //is a variable that has the createFareMultiplier function with an int argument, in this case 2, which when called, takes 2 as argument, then goes to the innuer anonymous function, which takes fare as an argument, then returns the product of int and fare. 

const fareTripler = createFareMultiplier(3); //is a variable that has the createFareMultiplier function with an int argument, in this case 3, which when called, takes 3 as argument, then goes to the innuer anonymous function, which takes fare as an argument, then returns the product of int and fare. 

function selectDifferentDrivers(array, selectingDrivers) { //is a function that takes the array of drivers as the first argument and the array selectingDrivers, which is an array containing the returned values of returnFirstTwoDrivers and returnLastTwoDrivers. If returnFirstTwoDrivers is passed as an argument in the second argument, will run the code in the if statement. Head to if statement code.
    if (selectingDrivers === returnFirstTwoDrivers){ //if returnFirstTwoDrivers is ran through the second argument, returnFirstTwoDrivers wil be called and ran with array as the argument.
        return returnFirstTwoDrivers(array);
    }
    else if(selectingDrivers === returnLastTwoDrivers){ //if returnLastTwoDrivers is ran through the second argument, returnLastTwoDrivers wil be called and ran with array as the argument.
        return returnLastTwoDrivers(array);
    }
}
