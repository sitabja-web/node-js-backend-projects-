import mongoose from "mongoose";

const useerSchema = new mongoose.Schema({
       firstName: {
              type: String,
              required:true,
       },

       lastName:  {
              type:String,
              required:true,


       },


        userName:  {
              type:String,
              required:true,
              unique:true
              

       },

            email:  {
              type:String,
              required:true,
              unique:true,
        },

         password:  {
              type:String,
              required:true,
              

       },

         image:  {
              type:String,
              required:false,
              

       }
}, {timestamps:true})  

//  these are the schema now we can create an user model with this 

const User = mongoose.model("User", Userschema)
export default User


// this is how we create an user model or an user schema in node js 