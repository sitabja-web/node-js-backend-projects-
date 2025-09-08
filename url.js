// url = >  uniform resource locator 
// parts of a url =>

// https => hyper text  transfer portocol  secure this uses ssl one we also had http first part is protocol in an  url 

// then there is domain 
// for  the simplication of ip address we use url

// https://www.piyushgarg.dev/

// https:// protocol 
// www.piyushgarg.dev  // domain - user friendly name of ip address of my server 
// / = > home page or route path 


// we also can have nested paths  like below

//  https:///www.piyushgarg.dev/project

// url querry parameters=>  in the query parameter we have  the values that come after ? 

// http://localhost:8000/product?id=101&name=mobile
// query are key value pairs
// ? => query string starti hoti hai  
// id = 101 aur name = mobile => key value pairs 
// & =>  multiple parameter can be seperated  seperated by &


// const http = require("http");  // Node.js ka built-in http module import kiya

// const server = http.createServer((req, res) => {
//   console.log(req.url);   // Har request ka URL print hoga console me

//   // Browser jab bhi request bhejta hai, ek extra request bhi hoti hai → "/favicon.ico"
//   if (req.url == "/favicon.ico") return; // usse ignore kar diya

//   res.end("Check console");  // Response client ko bhej diya
// });

// server.listen(8000); // Port 8000 par server start


// if we go and  paste the local host link "// http://localhost:8000/product?id=101&name=mobil"in the server then we have in the  output =>

// /product?id=101&name=mobile
// /favicon.ico
// /product?id=101&namegame
// /favicon.ico


// we have url.parse it converts the  url from the string format se object mode format ke kar de  na for our ease 


// {
//   pathname: '/about',
//   query: { myname: 'Aman', age: '21' },
//   search: '?myname=Aman&age=21',
//   path: '/about?myname=Aman&age=21',
//   href: '/about?myname=Aman&age=21'
// }

// like these

// const http = require ("http");
// const fs  = require ("fs");
// const http = require ("url"); // for this we need to install npm i url 
// const server = http.createServer((req, res) => {
// if(req.url == "/favicon.ico")  return res.end();
//   const log = `${Date.now()}: ${req.url} New Request Received\n`;
//   const myUrl = url.parse(req.url, true);

//   fs.appendFile("log.txt", log, (err) => {
//        // but in the log  file.txt we will have with the querry paramater
//     if (err) console.error("Error:", err);
//   });

//   switch (myUrl.pathname) {
//     case "/":
//       res.end("HomePage");
//       break;

//     case "/about":
//       const username = myUrl.query.myname || "Guest";
//       res.end(`Hi, ${username}`);
//       break;

//     default:
//       res.end("404 Not Found");
//   }
// });

// server.listen(8000, () => {
//   console.log("Server running on http://localhost:8000");
// });


