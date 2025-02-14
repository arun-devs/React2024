import { CDN_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
     // login-btn
const [btnname,setbtnname]=useState("Login");
    
    return  (<div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                 <li>Home</li>   
                 <li>AboutUs</li>
                 <li>ContactUs</li>
                 <li>Cart</li>
                 <button className="btn-login" 
                 onClick={()=>{
                    btnname==="Login"?setbtnname("Logout"):setbtnname("Login")

                 }}>
                    {btnname}
                 </button>
                </ul>
             </div>
        </div>);
    };

    export default Header;