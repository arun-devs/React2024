import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory=({data,showItems,setShowIndex})=>{
    // const[showItems,setShowItems]=useState(false);
    const handleClick=()=>{
        setShowIndex();
        
    }
    console.log(data);
        console.log(process.env.NODE_ENV);
    return(
        
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}({data.title.length})</span>
            <span>⬇️</span>
          
            </div>
           {showItems && <ItemList itemss={data.itemCards}/>} 
        </div>
        </div>
    )
   
}
export default RestaurantCategory;