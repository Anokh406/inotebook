const mongoose=require('mongoose');
const mongooseUri='localhost:27017';
const connectTomongoose =()=>{
    mongoose.connect(mongooseUri,()=>{
        console.log("connect to mongoose successfully");
    })
}
module.exports=connectTomongoose;