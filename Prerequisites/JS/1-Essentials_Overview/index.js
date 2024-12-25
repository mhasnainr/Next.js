// -------------------------------------------------------------------------------------------- functions

// types of functions

// 1- declaration

// function greet(name) {
//   return `Welcome, ${name}!`;
// }

// console.log(greet("Hasnain"));

// 2- expression

// const greet = function (name) {
//   return `Welcome, ${name}!`;
// };

// console.log(greet("Hasnain"));

// 3- Arrow

// const greet = (name) => `Welcome, ${name}!`;

// console.log(greet("Hasnain"));

// -----------------------  Practise task-1

// function sqr(num) {
//   return num * num;
// }

// console.log(sqr(6));

// ----------------------- Challenge 1: function-based calculator

// const calculator = (n1, n2, operation) => {
//   if (operation === "add") {
//     return n1 + n2;
//   } else if (operation === "subt") {
//     return n1 - n2;
//   } else if (operation === "mult") {
//     return n1 * n2;
//   } else if (operation === "dvd") {
//     return n1 / n2;
//   } else {
//     return "Invalid Operation";
//   }
// };

// console.log(calculator(12, 4, "add"));

// const operation = (n1, n2) => {
//   return n1 * n2;
// };

// console.log(operation(2, 3));

// const msg = (name) => {
//   console.log(`Welcome ${name}`);
// };
// msg("Hasnain");

//

// -------------------------------------------------------------------------------------------- Loops

// ------ for loop: repeats a block of code a specific number of times

// const qs = "Printing numbers from 1 to 10";
// console.log(qs);
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//

// const qs = "even numbers from 1 to 20";
// console.log(qs);
// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//

// const qs = "numbers from 10 to 1";
// console.log(qs);
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

//

// const qs = "elements of an array";
// console.log(qs);
// const fruits = ["apple", "banana", "mango", "watermelon", "grapes", "orange"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//

// -------------- Quick Task (easy level)

// Task 1: Print numbers from 1 to 50.

// for (let i = 0; i <= 50; i++) {
//   console.log(i);
// }

//

// Task 2: Print odd numbers from 1 to 30

// for (let i = 0; i <= 30; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

//

// Task 3: Print the names of 5 of your friends using an array.

// const friends = ["ali", "asif", "bashir", "hamid", "kashif"];
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

//

// -------------- Logic-Building Task (Medium Level)

// Task 1: Print the multiplication table of 5 (from 1 to 10).

// for (let i = 1; i <= 10; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

//

// Task 2:  Print the square of each number from 1 to 10 (e.g., 1² = 1, 2² = 4, 3² = 9, etc.).

// for (let i = 1; i <= 10; i++) {
//   square = i * i;
//   console.log(`${i}² = ${square}`);
// }

//

// Task 3:  Print only the names that have more than 4 characters from this array
// const names = ["Ali", "Ahmed", "Sara", "Fatima", "Zain", "Muhammad"];

// const names = ["Ali", "Ahmed", "Sara", "Fatima", "Zain", "Muhammad"];
// for (let i = 0; i < names.length; i++) {
//   if (names[i].length > 4) {
//     console.log(names[i]);
//   }
// }

//

// -------------- Challenge (Hard Level)

// 1️⃣ Create a FizzBuzz program using a for loop from 1 to 50:
// If a number is divisible by 3, print "Fizz".
// If a number is divisible by 5, print "Buzz".
// If a number is divisible by both 3 and 5, print "FizzBuzz".

// for (let i = 1; i < 11; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//

// 2️⃣ Sum of all numbers from 1 to 100 (output: 5050).

// let sum = 0;

// for (let i = 1; i < 10; i++) {
//   sum += i;
//   console.log(sum);
// }

//

// 3️⃣ Print the following pattern (for n = 5):

// *
// * *
// * * *
// * * * *
// * * * * *

// let pattern = "";

// for (let i = 0; i < 5; i++) {
//   pattern += "* ";
//   console.log(pattern);
// }

//

// ------ for while-loop: repeats a block of code as long as a condition is true.

// let busArrived = false;

// while (!busArrived) {
//   console.log("Bus not arrived yet.");
//   busArrived = true
// }
// console.log('Bus has arrived');

//

// Print numbers from 1 to 10

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//

// Print even numbers from 1 to 20

// let i = 1;
// while (i <= 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

//

// Print numbers from 10 to 1

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

//

// Print elements of an array

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// let i = 0;

// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

//

// Task: print the sum of numbers from 1 to n
// n = 5;
// sum = 0;
// i = 1;

// while (i <= n) {
//   sum += i;
//   i++;
// }
// console.log(sum);

//

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

//

// Task 1:

// let i = 10;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }

//

// Task 2: multiple of 3

// let i = 1;
// let n = 3;

// while (i <= 5) {
//   console.log(i * n);
//   i++;
// }

//

// Task 3: ----- check

// let i = 1;
// while (i <= 20) {
//   if (i != 13) {
//     console.log(i);
//   }
//   i++;
// }

//

// Task 4:

// i = 1;
// sum = 0;
// n = 50;

// while (i <= n) {
//   sum += i;
//   i++;
// }
// console.log(sum);

//

// Task 5:

// let i = 1;
// while (i <= 20) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
//   i++;
// }

// --------------------------------------------------------------------------------------------------------

// ------- map()

// Qs: You run an e-commerce store, and you want to increase the prices of all products by 20%
// same Qs, diff ways

// using for loop:

// let prices = [10, 20, 30];
// let newPrice = [];

// for (let i = 0; i < prices.length; i++) {
//   newPrice.push(prices[i] * 1.2);
// }
// console.log(newPrice);
// [120, 240, 360]

//

// using map()

// let prices = [10, 20, 30];
// let newPrice = prices.map((prices) => prices * 1.2);
// console.log(newPrice);
// [120, 240, 360]

//

// Practise Qs [ map() ]:

// P1: double the value

// let num = [3, 5, 4, 7];
// let doubled = num.map((num) => num * 2);
// console.log(doubled);

//

// P2: convert to uppercase

// let names = ["ali", "asiF", "baqir"];
// let newForm = names.map((names) => names.toUpperCase());
// console.log(newForm);

//

// P3: Extract specific property

// let users = [
//   {
//     name: "Ali",
//     age: 23,
//   },
//   {
//     name: "Ashir",
//     age: 43,
//   },
//   {
//     name: "Abid",
//     age: 13,
//   },
// ];

// let userNames = users.map((users) => users.name);
// console.log(userNames);

//

// ------------- Task Qs [ map() ]

// Level: Easy

// Qs below:

// let people = [
//   { name: "Ayesha", age: 30 },
//   { name: "Hamza", age: 40 },
//   { name: "Sara", age: 25 },
// ];

// T1: Square each number in the array.

// let square = people.map((people) => people.age * people.age);
// console.log(square);

//

// T2: Convert an array of lowercase city names into uppercase.

// let changeCase = people.map((people) => people.name.toUpperCase());
// console.log(changeCase);

//

// T3: Extract the "age" of each person

// let extract = people.map((people) => people.age);
// console.log(extract);

//

// Level: Medium

// Qs below:

//   T1: Add a 10% tax to each price

// let prices = [100, 200, 300, 400];
// let taxedPrice = prices.map((prices) => prices * 0.9);
// console.log(taxedPrice);

//

//

//   T2: Transform the following list of products to only return the product names

// let products = [
//   { productName: "Laptop", price: 1000 },
//   { productName: "Phone", price: 500 },
//   { productName: "Tablet", price: 300 },
// ];

// let names = products.map((products) => products.productName);
// console.log(names);

//

//   T3:  Write a function that returns the lengths of each name in an array:

// let names = ["Hasnain", "Ali", "Umair"];
// let lengths = names.map((names) => names.length);
// console.log(lengths);

//

// Level: Hard

// T1: Extract the domain names from the following email addresses:

// let emails = ["user1@gmail.com", "user2@yahoo.com", "user3@hotmail.com"];

// let domains = emails.map((emails) => emails.split("@")[1]);
// console.log(domains);

//

// T2: You have an array of objects representing student scores. Return a new array where only the names of students with scores above 50 are listed.

// let students = [
//   { name: "Hasnain", score: 80 },
//   { name: "Ali", score: 40 },
//   { name: "Umair", score: 55 },
// ];

// newList = students
//   .filter((students) => students.score > 50)
//   .map((students) => students.name);
// console.log(newList);

//

// T3: Transform an array of book objects to show only the book titles and authors

// let books = [
//   { title: "Book1", author: "Author1", year: 2020 },
//   { title: "Book2", author: "Author2", year: 2021 },
//   { title: "Book3", author: "Author3", year: 2022 },
// ];

// let newArray = books.map((books) => ({
//   title: books.title,
//   author: books.author,
// }));

// console.log(newArray);

//

// ------- forEach():

// ---- Practise Qs

// Logging Each Element

// let num = [1, 2, 4, 6, 3];
// num.forEach((num) => console.log(num));
// console.log(num); // wrong step

//

// Calculate Total Sum

// let prices = [132, 432, 542];
// let total = 0;

// prices.forEach((prices) => {
//   total += prices;
// });
// console.log(total);

//

// Update Values in Place

// let products = [
//   {
//     name: "Laptop",
//     price: 232,
//   },
//   {
//     name: "Phone",
//     price: 1232,
//   },
// ];
// products.forEach((products) => {
//   products.price += 100;
// }),
//   console.log(products);

//

// ---- Tasks

// Level: Easy

// Qs: Log each name from an array of names:

// let names = ["Hasnain", "Ali", "Umair"];
// names.forEach((name) => console.log(name));

//

// Qs: Add 5 to each number in an array

// let numbers = [10, 20, 30, 40];
// numbers.forEach((number, index) => (numbers[index] = number + 5));
// console.log(numbers);

//

// Qs: Print the index of each element in an array

// let colors = ["red", "green", "blue"];
// colors.forEach((colors, index) => console.log(index));

//

// Level: Medium

// Qs: Calculate the total score from an array of scores ----- Error in Ans

// let scores = [80, 90, 70, 85];
// scores.forEach((scores, index) => (scores[index] = scores + scores));
// console.log(scores);

//

// Qs: Update the stock status for each product

// let products = [
//   { name: "Laptop", inStock: false },
//   { name: "Phone", inStock: true },
// ];
// Update all to `inStock: true`

//

//

// Qs: Extract and log the initials of each name in the array

// let fullNames = ["John Doe", "Jane Smith", "Emily Davis"];
// Expected: J.D, J.S, E.D

//

//
