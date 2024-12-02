const mongoose=require("mongoose")
let sc=mongoose.Schema;
const loginSchema = new sc({
    email:String,
    username:String,
    password:String,
});

var loginmodel=mongoose.model("Login",loginSchema);
module.exports=loginmodel;