//server side instruction to run js
const prompt=require("prompt-sync")({sigint:true});

//create variables
let userInputs =[];
let userName = [];
let modName = [];
const arrayObj = [];

//import arrayManipulation.js
const importFunc =require('./arrayManipulation');
const arrayProcess = importFunc.arrayProcess(userInputs);

function createUserProfiles() {
    //override the formatArrayName function from the arrayManipulation.js file
    function formatArrayName() {
        //load user inputs into this method
        userInputs;
        //take first user name
        let str = prompt('Please enter the first name on your list: ');

        //loop to accept new inputs
        while(userName.length < userInputs.length){
            userName.push(str);
            str = prompt('Please enter next name and any value of choice for the last name: ');
        }
        //check if index of name and input are the same
        //if they are the same and input is odd convert to lower case and vice versa
        for (let index = 0; index < userInputs.length; index++) {
            if (userInputs[index]%2===0) {
                modName[index] = userName[index].toUpperCase();
            }
            else{
                modName[index] = userName[index].toLowerCase();
            }            
        }
    }
    //call the function
    formatArrayName();

    //loop through to match original user input and modified user input and pair them together
    for (let index = 0; index < userName.length; index++) {
        arrayObj[index] = userName[index] , modName[index];
        console.log(index +1 , ': [ original user name : ' , userName[index], ', ' , 'modified user name : ', modName[index] ,']');
    }
}
//call the function
createUserProfiles();


