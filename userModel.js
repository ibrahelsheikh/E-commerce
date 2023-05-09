import mongoose from "mongoose";
import uniqueValidatoer from"mongoose-unique-validator";
import bcrypt from" bcrypt";
const userSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true, minlength: 8, maxlength: 25},
    phone: {type: String},
    img: {type: String},
    rule: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    id:{type:String,require:true},
    address: [{
        state: {type: String},
        city: {type: String},
        street: {type: String},
    }]
})
userSchema.plugin(uniqueValidatoer);
userSchema.post("save",function(next){
    console.log("the user is created successfully");
    
})
userSchema.pre("save", async function(next){
    console.log("the user about to save ");
    const sait= await bcrypt.genSait();
   this.password=await bcrypt.hash(this.password.sait);
   next();
});

const Users = mongoose.model("users", userSchema);

export {Users};