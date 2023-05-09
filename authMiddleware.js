import { Jwt } from "jsonwebtoken";
export const authToken=(req,res,next)=>{
    const token=req.cookies.Jwt
    if(token){
        Jwt.verify(token,process.env.JWT_SECRET_KEY,(error,decodedToken)=>{
           if(errro){
            console.log("error",error);
           }else{
            console.log("decodedToken",decodedToken);
            next();
           }
        })
    }
    else{
        console.log("no token found");
        res.send("you are not authenticated");
    }
}