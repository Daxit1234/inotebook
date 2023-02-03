const mongoose=require("mongoose")
const mongourl="mongodb://localhost:27017/"
const connectToMongo=()=>{
    mongoose.connect(mongourl,()=>{
        console.log("connect success");
    })
}
module.exports=connectToMongo