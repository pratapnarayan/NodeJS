const person = {
    name: "Pratap Pandey",
    age: 42,
    greet() {
        console.log("Hi, I am " + this.name + " and my age is " + this.age);
    }
};
person.greet();
console.log(person);

const hobbies = ['Sports', 'cooking'];
for(let hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.map(hobby => {
    return 'Hobby : ' + hobby;
}));

//Spread Operator - Pulls out the content of old array and copies it into new array.SYNTAX = ...
const copiedArray = [...hobbies];
console.log(copiedArray);