import {useState} from "react";
import "./AddItem.css";
import avatar from "../assests/images/user.jpg";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const AddItem =()=>{
    const navigate = useNavigate();
    // const[file,setFile] = useState()
    const [item , setItem] = useState({
        name:"",
        price:"",
        detail:"",
        stock:"",
        category:"",
        // expiry:"",
        profile:new File([],"")
    })
    // function convertToBase64(file){
    //     return new Promise((resolve , reject)=>{
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);

    //         fileReader.onload = ()=>{
    //             resolve(fileReader.result)
    //         }
    //         fileReader.onerror = (error)=>{
    //             reject(error)
    //         }
    //     })
    // }
    const onUpload = async(e)=>{
        // const base64 = await convertToBase64(e.target.files[0])
        // setFile(base64)
        setItem({...item,[e.target.name]:e.target.files[0]})
    }
    const handleItem =async(e)=>{
        e.preventDefault();
        const loadToast = toast.loading("Please wait...")
        console.log(item)
        const formdata = new FormData()
        formdata.append("profile",item.profile)
        formdata.append("name",item.name)
        formdata.append("price",item.price)
        formdata.append("detail",item.detail)
        formdata.append("stock",item.stock)
        formdata.append("category",item.category)
        // formdata.append("expiry",item.expiry)
        const res = await axios.post("http://localhost:8000/add-item",formdata,{
            headers:{"Content-Type":"multipart/form-data"},
        })
        toast.dismiss(loadToast)
        if(res.status==="success"){
            toast.success(res.data.message)
            setItem({
                name:"",
                price:"",
                detail:"",
                stock:"",
                category:"",
                // expiry:"",
                profile:new File([],"")
            })
            navigate("/add-item")
        }
        else{
            toast.error(res.data.message)
            navigate("/add-item")
        }
    }
    return(
        <>
            <div class="hii">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className="form"  method="post" enctype="multipart/form-data">
                <h3>Upload Product</h3>
                <input className="input" type="Number" placeholder="Quantity Of Product" id="price" name="stock" value={item.stock} onChange={e=>{setItem({...item,[e.target.name]:e.target.value})}} required />
                <input className="input" type="text" placeholder="Name of product" name="name" value={item.name} onChange={e=>{setItem({...item,[e.target.name]:e.target.value})}} required  />
                <input className="input" type="Number" placeholder="price" id="price" name="price" value={item.price} onChange={e=>{setItem({...item,[e.target.name]:e.target.value})}} required />
                <textarea id="textarea" cols="40" rows="10" className="pp" placeholder="Product Detail" name="detail" value={item.detail} onChange={e=>{setItem({...item,[e.target.name]:e.target.value})}}></textarea>
                {/* <input className="input" type="text" placeholder="product code" id="code" name="pcode" /> */}
                <select className="input" style={{backgroundColor: "inherit"}} name="category" value={item.category} onChange={e=>{setItem({...item,[e.target.name]:e.target.value})}} id="catSelect">
                    <option style={{color: "black"}} value="Electronic">Electronic</option>
                    <option style={{color: "black"}} value="Food">Food</option>
                    <option style={{color: "black"}} value="Sports">Sports</option>
                    <option style={{color: "black"}} value="Home Appliance">Home Appliance</option>
                    <option className="royal" style={{color: "black"}} value="Software">Software</option> 
                    <option style={{color: "black"}} value="Other">Other</option>
                </select>
                {/* <input type="date" className="input" name="expiry" value={item.expiry} onChange(e=>{setItem({...item,[e.target.name]:e.target.value})}) style={{color:"white",width:"100%" , height:"20%",marginTop:"10px"}} /> */}
                {/* <input className="input royal" disabled type="text" placeholder="Software License Number" id="softwareLicense" name="Software License Number" required/> */}
                {/* <div className="logo">
                    <label className="u-l" htmlFor="profile" >
                        <img className="p_img" src={file || avatar} alt="" style={{alignSelf:"center"}}/>
                    </label> */}
                    <input className="file" accept="image/*" id="profile" name="profile" type="file" onChange={onUpload} style={{alignSelf:"center",marginTop:"20px",textAlign: "start", paddingTop: "15px"}} />
                {/* <input className="input" type="file" accept=".jpg,.png" name="pdt_img" style={{marginTop:"20px",textAlign: "start", paddingTop: "15px"}}/> */}

                  {/* </div> */}
                <button className="button" type="submit" onClick={handleItem}>Submit</button>
                </form>
                </div>
        </>
    )
}

export default AddItem;