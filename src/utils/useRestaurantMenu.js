import { MENU_API_URL } from "../utils/constant";
import { useEffect, useState } from "react"
const useRestaurantMenu=(resId)=>{
    
    const[resinfo ,SetResinfo]=useState(null)
    useEffect(()=>{
        fetchmenu();

      },[]);  
      const fetchmenu =async()=>{
        const data=await fetch(MENU_API_URL+ resId +"&submitAction=ENTER");
        const json=await data.json()
        console.log(json);
        SetResinfo(json.data)
            }
    
    
    return resinfo;

}

export default useRestaurantMenu;