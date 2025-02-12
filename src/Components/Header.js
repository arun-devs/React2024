import { CDN_URL } from "../utils/constant";

const Header = () => {
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
                </ul>
             </div>
        </div>);
    };

    export default Header;