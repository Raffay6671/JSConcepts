// Simple Mathematical Operations
// let myAge = 22;
// let humanDogRatio = 7;
// let myDogoAge = myAge * humanDogRatio;
// console.log(myDogoAge);

// The concept of incrementing in the Let variable
// let newOne = 50;
// newOne = newOne + 100;
// newOne = newOne - 25;
// newOne = newOne + 70;
// console.log(newOne);

// function increment () {

// }

//Creating a simple function and calling it simply
// function testingFunction() {
//   console.log(42);
// }
// testingFunction();

//Creating a simple function to sum the values and console the values
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function Sums() {
//   let sum = lap1 + lap2 + lap3;
//   return sum;
// }
// let display = Sums();
// console.log(display);

//Now writing a function that increments in simple way
// let lapsCompleted = 0;
// function increment() {
//   lapsCompleted = lapsCompleted + 1;
// }
// increment();
// increment();
// increment();
// console.log(lapsCompleted);

//now simple counter App working functionality
// let getCounter = document.getElementById("count-el"); //Passing the arguments
// console.log(getCounter);
// let count = 0;
// function increment() {
//   count = count + 1;
//   getCounter.innerText = count;
// }

// now simple counter App working functionality along with save functionality
// let getCounter = document.getElementById("count-el"); //Passing the arguments
// console.log(getCounter);
// let count = 0;
// let log = 0;
// function increment() {
//   count = count + 1;
//   getCounter.innerText = count;
// }
// function save() {
//   log = count;
//   console.log(log);
// }

//Now testing the strings functionality and concatenation concept
// let test = "You have tree new notifictaios";
// console.log(test);
// let username = "Raffay";
// let message = "You have three new notifications";

// let messageToUser = message + " , " + username + "! ";
// console.log(messageToUser);

// let name = "Raffay";
// let greeting = "Hi, my name is";
// let myGreeting = greeting + " " + name;
// console.log(myGreeting);

//A bigger activity of revising the above concepts
// let welcomeEl = document.getElementById("welcome-el");
// console.log(welcomeEl);
// let name = "Raffay";
// let greeting = "Welcome Back per ";
// welcomeEl.innerText = greeting + name;
// welcomeEl.innerText += "👋";

//Now implementing the Save Functionality with Previous Feautures as well-difference between innerText and textContent
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}
function save() {
  combine = count + " - ";

  saveEl.textContent += combine;
  countEl.textContent = 0;
  count = 0;
}
