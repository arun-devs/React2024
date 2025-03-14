import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";


const RestaurantMenu=()=>{
  const[resinfo ,SetResinfo]=useState(null)
      useEffect(()=>{
        fetchmenu();

      },[]);      
      
      const fetchmenu =async()=>{
        const data=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.0013655&lng=76.310081&restaurantId=57241&submitAction=ENTER"

        );
        const json=await data.json()
        console.log(json);
        SetResinfo(json.data)
    }
   
    // if (resinfo === null) return <Shimmer/>

    if (resinfo===null) return<Shimmer/>
    const { name,avgRating,costForTwo,cuisines } = resinfo?.cards?.[2]?.card?.card?.info ?? {}; //empty object handled
    
return (
        <div id="rest-menu">
            
                    <h1>{name}</h1>
                    <h2>{avgRating}</h2>
                    <h2>{costForTwo}</h2>
                    <h2>{cuisines}</h2>
                   <h2></h2>
                    
                    
        </div>
    )
}

export default RestaurantMenu