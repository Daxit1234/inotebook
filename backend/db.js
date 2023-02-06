const mongoose=require("mongoose")
const mongourl="mongodb://localhost:27017/inotebook"
const connectToMongo=()=>{
    mongoose.connect(mongourl,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateTndex:true
        },
        ()=>{
        console.log("connect success");
    })
}
module.exports=connectToMongo