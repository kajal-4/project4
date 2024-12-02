const mongoose=require('mongoose')
mongoose.connect("")
.then(()=>{
    console.log("db connected")
})
.catch((error)=>
console.log(error)
);