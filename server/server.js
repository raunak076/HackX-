import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config.js"
import connect from "./db/connection.js";
import userRouter from "./src/routes/userRouter.js";
import url from 'url';
import path from "path";
import multer from "multer"
import Users from "./model/user.js";
import jwt from "jsonwebtoken";
import Inventory from "./model/inventory.js";
import bcryptjs from "bcryptjs"

const app = express();

/** middlewares */
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/",express.static(path.join(__dirname+"/public/uploads")));
app.use(cors());
// {origin:["http://localhost:3000/","http://localhost:3000/api/users/signup"],methods:["GET","POST","PUT","DELETE","UPDATE","PATCH"],credentials:true}
app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json())

const generateToken = (id)=>{
    return jwt.sign({id},process.env.SECRET_KEY,{expiresIn:"1d"})
}

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/uploads")
    },
    filename:function(req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null,uniqueSuffix + file.originalname)
    }
})
const upload = multer({storage:storage})

//registering user
app.post("/signup",upload.single("profile"),async(req,res)=>{
    // console.log("r")
    try {
        console.log(req.body,req.file)
        console.log("hiii")
        const {name,email,password,cpassword,mobile,gender} = req.body
        console.log("hello")
        const profile = req.file.filename
        console.log("hiii1")
        console.log(profile)
        console.log("hiii2")
        console.log(name,email,password,cpassword,mobile,gender)
        console.log("hiii3")
        if(name && email && password && cpassword && mobile && gender && profile){
        console.log("hiii4")
        if(await Users.findOne({email})){
            console.log("hiii5")
            res.send({
                        "status":"failed",
                        "message":"Email already exists :-("
                    })
        }
        else{
                console.log("hiii6")
                if(password === cpassword){
                    const user = await new Users({
                        name,
                        email,
                        password,
                        mobile,
                        gender,
                        profile
                    })

                    
                    // res.cookie("token",token,{
                    //     sameSite:"strict",
                    //     path:"/",
                    //     expires:new Date(Date.now() + 1000 * 86400), //1 day
                    //     httpOnly:true
                    // }).send("cookie initialiased")
                    // console.log(token)
                    user.save();
                    // res.set('Access-Control-Allow-Origin', '*');
                    res.send({
                        "status":"success",
                        "message":"Registration successfull :-) ",
                        // "token":token,
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

//loging user
app.route("/signin").post(async(req,res)=>{
    try {
        const { email,password } = req.body
        console.log(req.body)
        if(email && password) {
            const user = await Users.findOne({email:email})
            if(user != null) {
                const dePassword = await bcryptjs.compare(password,user.password)
                if(email === user.email && dePassword){
                    // generate token 
                    const token = generateToken(user._id)
                    res.json({
                        "status":"success",
                        "message":"Login Successfull :-)",
                        user,
                        "token":token
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

app.delete("/delete/:_id",async(req,res)=>{
    console.log(req.params._id)
    const id = req.params._id
    const r = await  Inventory.findOne({id})
    if(res){
        console.log("id" ,r)
        res.send(r)
    }
    else{
        res.send(
            "invlid id"
    )
    }
})

// app.use("/api/users/",userRouter);
app.post("/user",async(req,res)=>{
    const {token} = req.body
    const decode = jwt.verify(token, process.env.SECRET_KEY)
    console.log(decode.id)
    const _id = decode.id
    const user = await Users.findOne({_id})
    // console.log(user)
    res.json(user)
})
//add product 
app.get("/products",async(req,res)=>{
    // const{name,price,code,stock,detail,category} = req.body
    // console.log(name,price,code,stock,detail,category)
    const data = await Inventory.find({})
    res.json(data)
})
app.post("/add-item",upload.single("profile"),async(req,res)=>{
    const{name,price,stock,detail,category,expiry} = req.body
    const file = req.file.filename
    console.log(name,price,stock,detail,category,expiry,file)
    // res.send({name,price,stock,detail,category})
    try {
        if(name && price && stock && detail && category  && file){
            console.log(name,typeof(price),typeof(stock),detail,category,expiry)
            const product = await new Inventory({
                name:name,
                price:price,
                stock:stock,
                detail:detail,
                category:category,
                profile:file
            })
            console.log(product)
            await product.save()
            res.json({
                "status":"success",
                "message":"Product added successfully :-)",
                product
            })
        }
        else{
            res.json({
                "status":"failed",
                "message":"Please fill all the fields :-("
            })
        }
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(8000,(err)=>{
    if(err){
        console.log(err.message);
    }
    connect().then(()=>{
        console.log("server started...");
    }).catch(()=>{

    })
})