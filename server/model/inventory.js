import mongoose from "mongoose";

const inventory = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    stock:{
        type:String,
        require:true
    },
    detail:{
        type:String,
        require:true
    },
    // code:{
    //     type:String,
    //     require:true
    // },
    // expiry:{
    //     type:String,
    //     require:true
    // },
    profile:{
        type:String,
        require:true
    }


})

export default mongoose.model("inventory",inventory)