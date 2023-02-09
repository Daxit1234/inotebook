const mongoose=require("mongoose")
const mongourl="mongodb://127.0.0.1:27017/inotebook?directConnection=true"
const connectToMongo=()=>{
     mongoose.connect(mongourl,()=>{
        console.log("connect success");
    })
}
module.exports=connectToMongo