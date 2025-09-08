//  node js

// backnend is web development is like that there is client side in front end part and in the  middle part boht the backend part and front end part interacts  with the server and this forms architecure

// interact with the server side  with the help of response  and send request 

// console.log("hola");
// alert("hello")  // alert is a browser function node js runs  on the server side 

// create yor won server

// we have two types of modules  in js one is common js and one is moduls js we use module js 

// import http from "http"

// http.createServer((req,res)=>{
//        res.end("hello this is my first server")
// })

// server.listen(8000)

// this 8000 is the gate we have over 65 k gate in our computer

// imp => in node js the browser functionality have been rejected like alert("hello ")  will not work althoug it is a js run time enviroemnt it is a cllien side thing in node js not  browsser

 
   
// import http from "http";
// const port = 8000  //  there are 65k port like thhis 
// // Create the server
// const server = http.createServer((req, res) => {
// res.writeHead(200, { "Content-Type": "text/plain" });
// const log = ` ${Date.now()} ${req.url} : New Req Recieved\n`;
// fs.appendFile("log.txt" , log , (err , data )=> {
//   res.end("hello from server ")
// })
// // here what we are doing is we are  adding the log files in or the users data in the log.txt 

// console.log(req);  // there are various methods req.object , req.header // this gives extra information
// console.log("new req rec."); // this comes in   the terminal 
// res.end("Hello World\n");  // this comes in serve 
// });

// Start the server
// //one server takes one port
// server.listen(port, () => {
//   console.log("Server running on http://localhost:8000");
// });


//  routing   with swtich case  

// this  is how we create server in  node js and use non   blocking  task

import http from "http";
import fs from "fs";

const port = 8000;

const myServer = http.createServer((req, res) => {
  // Request log
  const log = `${Date.now()}: ${req.url} New Request Received\n`;
  fs.appendFile("log.txt", log, (err) => {
    if (err) console.error("Error logging request:", err);
  });

  // Routing with switch
  switch (req.url) {
    case "/":
      res.end("Home Page");
      break;

    case "/about":
      res.end("About Page");
      break;

    case "/contact":
      res.end("Contact Page");
      break;

    case "/services":
      res.end("Our Services Page");
      break;

    default:
      res.statusCode = 404;
      res.end("404 Not Found");
  }
});

myServer.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



