import "./Login.css";
import {Link} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const navigate = useNavigate();
    const[user , setUser] = useState({
        email:"",
        password:"",
    })
    const handleUser = async(e) =>{
        e.preventDefault();
        const loadToast = toast.loading("Please wait...")
        console.log(user)
        const res = await axios.post("http://localhost:8000/api/users/signin",user)
        console.log(res)
        // const c = Cookies.get("token")
        // console.log(c)
        toast.dismiss(loadToast)
        if(res.data.status==="success"){
            toast.success(res.data.message)
            navigate("/dashboard")
        }
        else{
            toast.error(res.data.message)
            navigate("/login")
        }
    }
    return(
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className="l-form">
                <h3>Login</h3>

                <label>Email</label>
                <input type="text" placeholder="Email" id="username" name="email" value={user.email} onChange={e=>{setUser({...user,[e.target.name]:e.target.value})}} />

                <label>Password</label>
                <input type="password" placeholder="Password" id="password" name="password" value={user.password} onChange={e=>{setUser({...user,[e.target.name]:e.target.value})}} />

                <button onClick={handleUser}>Log In</button>
                <div className="Register">
                    <span className="go">Don't Have an account ?</span>
                    <Link className="" to="/register">  Register </Link>
                </div>
            </form>
        </>
    )
}

export default Login;