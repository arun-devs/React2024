import { CDN_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
     // login-btn
const [btnname,setbtnname]=useState("Login");
const {UserInfo}=useContext(UserContext)
const onlineStatus=useOnlineStatus();
const cartItems=useSelector((store)=>store.cart.items);
    
    return  (<div className="flex justify-between bg-pink-200 shadow-lg mb-0.5">
            <div className="logo-container">
                <img className="w-50" src={CDN_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                <li className="px-4">USERSTATUS:{(onlineStatus)?"✅":"🔴"}</li> 
                 <li className="px-4"><Link to="/">Home</Link></li>   
                 <li className="px-4"><Link to="/about">AboutUs</Link></li>
                 <li className="px-4"><Link to="/contact">ContactUs</Link></li>
                 <li className="px-4 font-bold"><Link to="/cart">Cart-({cartItems.length})items</Link></li>
                 <button className="btn-login" 
                 onClick={()=>{
                    btnname==="Login"?setbtnname("Logout"):setbtnname("Login")

                 }}>
                    {btnname}
                 </button>
                 <li className="px-4 font-bold">{UserInfo}</li>
                </ul>
             </div>
        </div>);
    };

    export default Header;