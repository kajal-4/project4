const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://kajal_pauly:kajal@busdb.4zj6q.mongodb.net/?retryWrites=true&w=majority&appName=BusDB")
.then(()=>{
    console.log("db connected")
})
.catch((error)=>
console.log(error)
);