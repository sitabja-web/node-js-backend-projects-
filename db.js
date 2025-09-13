//  here we will connect the databases 

import mongoose from "mongoose";

const  connectDB = async ()=> {
       try {
              
              await mongoose.connect(process.env.MONGODB_URL)
              console.log("DB connected");
              
       } catch (error) {
              console.log("DB error ", error);
               }
}

export default connectDB

// here we export the function 