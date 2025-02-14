import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const[ListofRestaurant,SetListofRestaurant]=useState(resList);
   const[Searchcontent, SetSearchcontent]=useState();
useEffect(()=>{
    fetchData();
},[]);

const fetchData =async()=>{
// const data=await fetch("https://corsproxy.io/?url=https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=10.0013655&lng=76.310081&carousel=true&third_party_vendor=1");
const data=await fetch("www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=10.0013655&lng=76.310081&carousel=true&third_party_vendor=1");
console.log(data);
const jsonData=await data.json()
console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
SetListofRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)



}
// if (ListofRestaurant.length===0){
//     return<Shimmer/>
// }
    return ListofRestaurant.length===0?<Shimmer/>:
(<div className="body">
   
        <div className="filter">
        <div className="btn-srch"><input type="text" value={Searchcontent} onChange={(e)=>{SetSearchcontent(e.target.value)}}/><button onClick={()=>{
            // filterout the restasurant
            const Searchfilteredlist=ListofRestaurant.filter((res)=>res.info.name.includes(Searchcontent));
            console.log(Searchfilteredlist);
            SetListofRestaurant(Searchfilteredlist)
        }}>Search</button></div>
    
            <button className="filter-btn" 
            onClick={()=>{const filteredlist=ListofRestaurant.filter(
                (Restaurant) => Restaurant.info.avgRating>4
            );
            SetListofRestaurant(filteredlist)
                // console.log(filteredlist);
                }}>Top Rated Restaurant</button>
        </div>
        <div className="rest-container">
           {ListofRestaurant.map(Restaurant=>(<RestaurantCard key={Restaurant.info.id} resData={Restaurant}/>))}





            
        </div>
        

    </div>);

};



 export default Body;