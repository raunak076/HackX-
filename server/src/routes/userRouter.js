import { Router } from "express";
// import * as controller from "../controller/appController.js"
import Users from "../../model/user.js"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";

const router = Router();

const generateToken = (id)=>{
    return jwt.sign({id},process.env.SECRET_KEY,{expiresIn:"1d"})
}

//-----------------GET REQUEST---------------\\


//-----------------POST REQUEST---------------\\
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../../public/uploads")
    },
    filename:function(req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null,uniqueSuffix + file.originalname)
    }
})

const upload = multer({storage:storage})
//register user
router.route("/signup",upload.single("profile")).post(async(req,res)=>{
    try {
        console.log(req.body,req.file)
        console.log("hiii")
        const {name,email,password,cpassword,mobile,gender,role} = req.body
        console.log("hello")
        const file = req.file.filename
        console.log("hiii1")
        console.log(file)
        console.log("hiii2")
        console.log(name,email,password,cpassword,mobile,gender,role)
        if(name && email && password && cpassword && mobile && gender && role && file){
            if(await Users.findOne({email})){
                res.send({
                    "status":"failed",
                    "message":"Email already exists :-("
                })
            }
            else{
                if(password === cpassword){
                    const user = await new Users({
                        name,
                        email,
                        password,
                        mobile,
                        gender,
                        role,
                        file
                    })

                    // generate token 
                    const token = generateToken(user._id)
                    // res.cookie("token",token,{
                    //     sameSite:"strict",
                    //     path:"/",
                    //     expires:new Date(Date.now() + 1000 * 86400), //1 day
                    //     httpOnly:true
                    // }).send("cookie initialiased")
                    // console.log(token)
                    user.save();
                    res.set('Access-Control-Allow-Origin', '*');
                    res.send({
                        "status":"success",
                        "message":"Registration successfull :-) ",
                        "token":token,
                        user
                    })
                }
                else{
                    res.send({
                        "status":"failed",
                        "message":"Password and Confirm Password does not match :-("
                    })
                }
            }
            
        }
        else{
            res.json({
                "status":"failed",
                "message":"Please fill all the fields :-("
            })
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//login user
router.route("/signin").post(async(req,res)=>{
    try {
        const { email,password } = req.body
        if(email && password) {
            const user = await Users.findOne({email:email})
            if(user != null) {
                const dePassword = await bcryptjs.compare(password,user.password)
                if(email === user.email && dePassword){
                    // const savedUser = await Users.findOne({email:email})
                    // // Generate JWT Token
                    // const token = jwt.sign(
                    //     {userID:savedUser._id},
                    //     process.env.JWT_SECRET_KEY,
                    //     {expiresIn:"5d"}
                    //     )
                    // const token = await user.generateAuthToken();
                    // console.log(token)
                    // res.cookie("shopzilla",token,{
                    //     expires:new Date(Date.now() + 25892000000),
                    //     httpOnly:true
                    // })
                    res.json({
                        "status":"success",
                        "message":"Login Successfull :-)",
                        user,
                        // "token":token
                    })
                } else {
                    res.json({
                        "status":"failed",
                        "message":"Bad Credentials :-("
                    })
                }
            } else {
                res.json({
                    "status":"failed",
                    "message":"Bad Credentials :-("
                })
            }
        } else {
            res.json({
                "status":"failed",
                "message":"Please fill all the fields :-("
            })
        }
    } catch (error) {
        
    }
});


//-----------------PUT REQUEST-----------------\\


export default router