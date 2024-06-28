//server side instruction to run js
const prompt=require("prompt-sync")({sigint:true});
//array to store user input
let userInputs = [];
let userStrings= [];

function arrayProcess(userInputs) {
    //take first user value or enter ok if no value is to be entered
    let input = prompt('Please enter your numbers(or type "ok" when you are finished): ');

    //loop to accept new inputs until ok is entered
    while(input.toLowerCase()!=='ok'){
        userInputs.push(input);
        input = prompt('Please enter next value (or type "ok" when you are finished): ');
    }

    //output original array
    console.log('Original user inputs = ', userInputs);
    console.log(`Array after even numbers were squared and odd numbers were tripled = `);

    //code block to check if a number is even or odd and perform specified operation
    for (let index = 0; index < userInputs.length; index++) {
        if (userInputs[index]%2===0) {
            userInputs[index] *= userInputs[index];
        }
        else{
            userInputs[index] *= 3;
        }            
    }
    userInputs;
    //output altered array
    console.log(userInputs);
}

function formatArrayStrings() {
    //load user inputs into this method
    userInputs;
    //take first user string
    let str = prompt('Please enter your strings: ');

    //loop to accept new inputs
    while(userStrings.length < userInputs.length){
        userStrings.push(str);
        str = prompt('Please enter next string and any value for the last string: ');
    }

    //check if index of string and input are the same
    //if they are the same and input is odd convert to lower case and vice versa
    for (let index = 0; index < userInputs.length; index++) {
        if (userInputs[index]%2===0) {
            userStrings[index] = userStrings[index].toUpperCase();
        }
        else{
            userStrings[index] = userStrings[index].toLowerCase();
        }            
    }
    //display new array
    console.log(userStrings);
}

module.exports = {
    arrayProcess,
    formatArrayStrings
}