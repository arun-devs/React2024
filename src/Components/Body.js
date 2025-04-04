import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    const[listofRestaurant,SetListofRestaurant]=useState([]);
    const[filterRestaurant,setFilterRestaurant]=useState([]);
   const[searchRestaurant, setSearchRestaurant]=useState("");
useEffect(()=>{
    fetchData();
},[]);

const fetchData =async()=>{
// const data=await fetch("https://corsproxy.io/?url=https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=10.0013655&lng=76.310081&carousel=true&third_party_vendor=1");
const data=await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=10.0013655&lng=76.310081&carousel=true&third_party_vendor=1");
console.log(data);
const jsonData=await data.json()
console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
SetListofRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilterRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
// listofRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)




}
// if (ListofRestaurant.length===0){
//     return<Shimmer/>
// }
// if (!listofRestaurant) return null;

const onlineStatus=useOnlineStatus();
if (onlineStatus===false)return<h1>something error occured</h1>;
    return listofRestaurant.length===0?<Shimmer/>:
(<div className="body">
   
        <div className="filter flex">
        <div className="btn-srch m-4 p-4"><input type="text" className="border border-solid border-black" value={searchRestaurant} onChange={(e)=>{setSearchRestaurant(e.target.value)}}/>
        <button className="px-4 bg-green-400 m-2 rounded-b-lg"
         onClick={()=>{
            // filterout the restasurant
            const Searchfilteredlist=listofRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase()));
            console.log(Searchfilteredlist);
            setFilterRestaurant(Searchfilteredlist)
        }}>Search</button></div>
    
            <button className="px-0 py-0 bg-green-400 mx-0 my-9" 
            onClick={()=>{const filteredlist=listofRestaurant.filter(
                (Restaurant) => Restaurant.info.avgRating>4
            );
            SetListofRestaurant(filteredlist)
                // console.log(filteredlist);
                }}>Top Rated Restaurant</button>
        </div>
        <div className="flex flex-wrap">
           {filterRestaurant.map(Restaurant=>(
            <Link to={"restaurant/" +Restaurant.info.id} key={Restaurant.info.id}><RestaurantCard  resData={Restaurant}/></Link>
            ))}





            
        </div>
        

    </div>);

};



 export default Body;