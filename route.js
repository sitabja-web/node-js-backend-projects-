import http from "http";

const port = 8000;

// req is fro reqest and res is for resolve 

const server = http.createServer((req, res) => {
  if (req.url === "/") {  // / is also called the homeroute 
    res.end("Welcome to home route");
  } else if (req.url === "/about") {
    res.end("Welcome to about route");
  } else if (req.url === "/contact") {
    res.end("Welcome to contact route");
  } else {
    res.end("404 Not Found");
  }

  // Optional async log
//   setTimeout(() => {
//     console.log(`Request for ${req.url} handled`);
//   }, 1000);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});