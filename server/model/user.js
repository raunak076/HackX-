import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const user = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
        
    },
    password:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    // role:{
    //     type:String,
    //     require:true
    // },
    profile:{
        type:String,
        require:true
    }
})

user.pre("save", async function(next){
    try {
        if(!this.isModified("password")){
            console.log("M1")
            return next()
        }
        // hash paaword
        const salt = await bcryptjs.genSalt(10)
        const hashPass = await bcryptjs.hash(this.password,salt)
        this.password = hashPass
        next()
    } catch (error) {
        console.log(error.message)
    }
    
})

export default mongoose.model("user",user)