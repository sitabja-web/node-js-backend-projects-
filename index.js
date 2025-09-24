

// import express from "express";



// const app = express();
// const port = 4000;





// // Middleware to parse JSON bodies
// app.use(express.json());

// const password = "sitabbja123";

// // Middleware to check password for POST requests
// app.use((req, res, next) => {
//   // Only check for POST requests
//   if (req.method === "POST") {
//     if (req.body.pass !== password) {
//       return res.status(401).send({ success: false, message: "Password does not match" });
//     }
//   }
//   next();  // 
// });


// app.get("/", (req, res) => {
//   res.set("x-username" , "neymar")     // we must  seperate it by a x 
//   //  this set comes in a key value pairs 

//   // now to remove somrthing in the header 


//   // hraders are nothing but extra information sent while sending request frim client to server and from server to clien it is like the meta data 
//     res.removeHeader("x-powered-by")   
//   console.log (req.headers);   //  we can not delete the  built in headers
//   res.json({ name  : "dit "  , age : "21 " });
// });


// // POST request handler at "/"
// app.post("/", (req, res) => {
//   console.log("Received data:", req.body);
//   res.send({ success: true, received: req.body });
// });


// app.listen(port, () => {
//    connectDB()
//   console.log(`Server started on port ${port}...`);
// });




// now we wil be connecting db  






import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js"; // Make sure path is correct

const app = express();
const port = 4000;
app.use(express.json())
// MongoDB connection URL
const mongoURL =
  "mongodb+srv://sitabjabiswas633_db_user:sitabja123@cluster0.rgvwce0.mongodb.net/virtualcode";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL); 
    console.log(" DB connected successfully");
  } catch (error) {
    console.log(" Database error:", error);
  }
};

// Call DB connection once


// Middleware to parse JSON bodies
// app.use(express.json());

// POST /create route
// app.post("/create", async (req, res) => {
//   console.log(req.body);
  
//   try {
//     let  { name, age, email, userName } = req.body;


//     const newUser = await User.create(
//       { 
//         name, 
//         age, 
//         email, 
//         userName
//        });

//     return res.status(201).json({
//       message: "User created successfully",
//       user: newUser,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: "Error creating user",
//       error: error.message,
//     });
//   }
// });


// app.get("/read/:userName", async (req, res) => {
  
// app.get("/read", async (req, res) => {
//    try {
    //  const  users = await User.find()

     
    //  const  users = await User.findOne({userName: req.params.userName})
    
    //  const  users = await User.find({age : { $gt : 18 }})
     
//     const users = await User.find({
//   $and: [
//     { age: { $gt: 18 } },      // age greater than 18
//     { name: { $ne: "Sitabja" } } // name not equal to "Sitabja"
//   ]
// });



app.put("/update/:id", async (req, res) => {
  try {
    let { name } = req.body;   // body se new name lo
    let id = req.params.id;    // params se user id lo

    let user = await User.findByIdAndUpdate(
      id,
      { name },                // update field
      { new: true }            // updated user return kare
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error updating user",
      error: error.message,
    });
  }
});

  
// Start server
app.listen(port, () => {
  connectDB();
  console.log(` Server started on port ${port}...`);
});
