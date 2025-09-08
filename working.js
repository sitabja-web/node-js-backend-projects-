// node js works like there is a servver we send request there and we get reponse from there   what happnes is all the request and all these things go into  event loop  

// cliens make a request to a node js server 

// then there  is 2 operations 
// blocking and non blocking 



// if it non-blocking or async it is immediately resolved otherwise 
// if it is  blocking or sync then it goes to the thread pool and there are workers and something is done like that

// there are actually 4 workers it is limited this workers  are assigned tasks then after the work is done the request in send  to the client after it is solved

const fs = require("fs");
const os = require("os")

// console.log("1");

// // Blocking (Sync)
// const result = fs.readFileSync("contact.txt", "utf-8");
// console.log(result);  // this means it prints the contact parts the result is that only 
// console.log("2");


// non blocking 


console.log(os.cpus().length);

console.log("1");


fs.readFile("contact.txt", "utf-8" , (err, result) => {
       console.log(result);
       })

       console.log("2");
       console.log("3");
       console.log("3");
       

       

// for non blocking we have thread pool

// by deafault threaf pool size => 4
// / max? 8 core v cpu it depens on the cpu   i have 12 here in my 