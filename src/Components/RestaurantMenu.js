import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu=()=>{
const {resId}=useParams();
const resinfo=useRestaurantMenu(resId)
            
            
   
    // if (resinfo === null) return <Shimmer/>

    if (resinfo===null) return<Shimmer/>
    const { name,avgRating,costForTwo,cuisines } = resinfo?.cards?.[2]?.card?.card?.info ?? {}; //empty object handled
    // const {itemCards}=resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards 
    const menusectionnew=resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards??{};
    console.log("menusectionnew:", menusectionnew);
    const menuSection = resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
    

const itemlist = menuSection
  .map((card) => card?.card?.card?.itemCards)
  .flat()
  .filter(Boolean); // Removes undefined values

console.log("Extracted Menu Items:", itemlist); // ✅ 
return (
        <div id="rest-menu">
            
                    <h1>{name}</h1>
                    <h2>{avgRating}</h2>
                    <h2>{costForTwo}</h2>
                    <h2>{cuisines}</h2>
                   <h2>Menu</h2>
                   {itemlist.map((item, index) => (
                  <li key={item?.card?.info?.id}>{item?.card?.info?.name ?? "Unnamed Item"}-{item?.card?.info?.price ?? "Unnamed Item"}</li>
  ))}

                   <ul>
                    {/* <li>{itemlist[0].dish.info.itemBadge.name}</li> */}
                    <li>parotta</li>
                   </ul>
                    
                    
        </div>
    )
}

export default RestaurantMenu