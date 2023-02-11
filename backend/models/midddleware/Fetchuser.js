const jwt = require("jsonwebtoken")
const JWT_SECRET = "i am daxit"

const fetchuser=(req,res,next)=>{
    //Get the user from the jwt token 
    const token=req.header("auth-token")
    if(!token){
        res.status(400).send({error:"please authenticate using a valid token"})
    }
    try{
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    }
    catch(err){
        res.status(400).send({error:"please authenticate using valid token"})
    }
}
module.exports=fetchuser;
