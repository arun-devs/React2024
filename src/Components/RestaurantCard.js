import reststyle from "./reststyle";
import stylecard from "./stylecard";
import { RES_URL } from "../utils/constant";

const RestaurantCard =(props)=>{
    const {resData}=props;
    console.log(resData);
    const {name,locality,cuisines,costForTwo,avgRating,deliveryTime}=resData?.info;
    return(
    <div className="p-4 m-4 w-[250px] h-[500px] rounded-lg  bg-lime-50 hover:bg-lime-300" >
        <img alt="noimg" className="rounded-lg" src={RES_URL + resData.info.cloudinaryImageId}/>
       
       
        <h3 className="font-bold py-2">{name}</h3>
        <h3>{locality}</h3>
        <h4 >{cuisines.join(",")}</h4>
        <h3>{costForTwo}</h3>
        <h3>{avgRating} Rating</h3>
        <h3>{deliveryTime}</h3>
      
        
    </div>

    );
};

export default RestaurantCard;