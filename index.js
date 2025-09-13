import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("hello"); // res.send is more common for text responses
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});


// this how we create a server in node js 


       



// env files is there to stotre all the importnat parts of the document 
