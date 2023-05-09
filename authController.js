import {Users} from "../models/userModel.js";
import bcrypt from" bcrypt";
import { Jwt } from "jsonwebtoken";
const CreateToken=(id)=>{
    return jwt.sign((id),process.env.JWT_SECRET_KEY,{expiresIn:2*24*60*60});

}
const post_user=async(req,res)=>{
    const Users={
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        img:req.body.img,
        id:req.body.id,
        address:req.body.address,
        rule:req.body.rule,
    };
    try{
        const userDate=await Users.Create(Users);
        res.status(201).json(userDate);
    }catch(error){
        res.send(error)
    }
};
const login_user=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const users=await Users.findOne({email});
        if(Users){
        const auh=await bcrypt.compare(password,Users.password);
        if(auth){
            const token=CreateToken(Users.id);
            console.log("token".token);
            res.cookie("jwt",token);
            res.send(Users);

        }
        else{
            res.send("password is not correct ");
        }

        }
    }catch(error)
    {res.send(error);

    }

};

          







export{post_user,login_user};