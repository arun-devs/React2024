import reststyle from "./reststyle";
import stylecard from "./stylecard";
import { RES_URL } from "../utils/constant";

const RestaurantCard =(props)=>{
    const {resData}=props;
    const {name,locality,cuisines,costForTwo,avgRating,deliveryTime}=resData?.info;
    return(
    <div className="res-card" style={stylecard}>
        <img alt="noimg" style={reststyle} src={RES_URL + resData.info.cloudinaryImageId}/>
       
       
        <h3>{name}</h3>
        <h3>{locality}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h3>{costForTwo}</h3>
        <h3>{avgRating} Rating</h3>
        <h3>{deliveryTime}</h3>
      
        
    </div>

    );
};

export default RestaurantCard;