
// https methods =>

// 1. get =>
//  to read or fetch data   
// exmple GET/USERS =>   give me the data of all users 

// 2. POST 
// 1.to create new data 
// example => .post/users => crrate a new user 

// 3.put
//1. to replace the existing data completely 
// put/users/1 => user id with 1 ka pura record naya se replace karo 


// 4.PATCH
// .existing data upated partiallty 
// example => patch/users/1=> only update the email of the users 

// 5. delete 
// .  to delete data 
// exmaple => delte / user/1 => user id =1 delete that 


// for every routing page we can have this 5 https methds  except the home page mostly we will use get post 

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/users") {
    res.end("Fetching users...");
  } else if (req.method === "POST" && req.url === "/users") {
    res.end("Creating a new user...");
  } else if (req.method === "PUT" && req.url === "/users/1") {
    res.end("Updating user 1...");
  } else if (req.method === "PATCH" && req.url === "/users/1") {
    res.end("Partially updating user 1...");
  } else if (req.method === "DELETE" && req.url === "/users/1") {
    res.end("Deleting user 1...");
  } else {
    res.statusCode = 404;
    res.end("Route not found");
  }
});

server.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
