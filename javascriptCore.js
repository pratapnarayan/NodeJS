// var name = "Pratap Pandey";
// var age = 42;
// var hasHobbies = true;

//Using let for creating variable
/* let is used to create a variable that can change. "const" is a constant variable and cannot be changed*/

const name = "Pratap Pandey";
let age = 42;
let hasHobbies = true;



// function summarizeUser(userName, userAge, userHobbies) {
//     return ("Name is "+ userName + ", Age is " + userAge + " and user has hobbies "+userHobbies);
// }

//Another way of defining above function

const summarizeUser = function (userName, userAge, userHobbies) {
    return ("Name is " + userName + ", Age is " + userAge + " and user has hobbies " + userHobbies);
}

//Using Arrow Function
const summarizeUser1 = (userName, userAge, userHobbies) => {
    return ("Name is " + userName + ", Age is " + userAge + " and user has hobbies " + userHobbies);
}

console.log(summarizeUser1(name, age, hasHobbies));
