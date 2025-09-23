// here we will create a server usiing node js  



// import http from "http";
// const port  = 8000
// port number ranege from 0 to 65  k

// req => client sends it to the server
// res => server sends it to the client

// Create the server and store it in a variable


// ip=> ensure the  data reaches the correct address 
// tcp -> ensure the data reaches safely 

// Port → directs data to the correct application/service on that device.


// const server = http.createServer((req, res) => {
//   res.end("Hello, this is my first server");
// });

// // Start the server
// server.listen(port, () => {
//   console.log("Server running at http://localhost:8000/");
// });





// routing done 



// import http from "http";
// const port  = 8000

// const server  = http.createServer((req, res)=> {

//        if(req.url == "/")  {
//               res.end("welcome to home page ")
//        }

//        else  if(req.url == "/about")  {
//               res.end("welcome to  about page ")
//        }


//       else  if(req.url == "/contact")  {
//               res.end("welcome to contact page ")
//        }

//      else   if(req.url == "/product")  {
//               res.end("welcome to  product  page ")
//        }
//        else {
//               res.end("404 not found ")
//        }
//        // everything is a url in node js server so where ever we send the  request it comes in the  our vs code output 
      
       
// })

// server.listen(port, () => {
//   console.log("Server running at http://localhost:8000/");
// });