import mongoose from "mongoose";
// import { MongoClient } from 'mongodb'
import "dotenv/config.js"



const connect = async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("db connected...");
    }).catch((err)=>{
        console.log("db not connected...");
        console.log(err.message);
    })
}


export default connect;