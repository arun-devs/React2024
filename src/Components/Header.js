import { CDN_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
     // login-btn
const [btnname,setbtnname]=useState("Login");
    
    return  (<div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                 <li><Link to="/">Home</Link></li>   
                 <li><Link to="/about">AboutUs</Link></li>
                 <li><Link to="/contact">ContactUs</Link></li>
                 <li><Link to="/contact">Cart</Link></li>
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