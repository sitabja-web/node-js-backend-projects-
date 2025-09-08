

// modules in node js

// import { add } from "./math.js";

// console.log(add(5, 6)); // 11



// there are various modules like fs  => file system read ,write files .
// path => files paths inlcude karna 
// https => for making the servver 
// os => system info lena 
//crypto
// url => url parse karna 

// these  typs of  modules helps in creating functions




// import { add, subtract, multiply } from "./math.js";

// console.log(add(5, 3));      // 8
// console.log(subtract(5, 3)); // 2
// console.log(multiply(5, 3)); // 15



//  this a custom module created by ud


// greet.js
// function greet(name) {
//   return `Hello, ${name}!`;
// }
// module.exports = greet;

// // app.js
// const greet = require("./greet");
// console.log(greet("Bhai")); // Hello, Bhai!


// npm => node package manager => packages related to node js is called node package manager 
// node js core me jo install hoke aata hai they are called modules

// for installing => npm i packagekanaam
// for unistalling=> npm uninstall packagekanaam


// error handling in async js 

// import { promises as fs } from "fs";

// async function readFiles() {
//   try {
//     const data1 = await fs.readFile("./test.txt", "utf-8");
//     console.log("File1:", data1);

//     const data2 = await fs.readFile("./another.txt", "utf-8");
//     console.log("File2:", data2);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// }

// readFiles();

