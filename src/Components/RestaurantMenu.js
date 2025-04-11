import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
const {resId}=useParams();
const resinfo=useRestaurantMenu(resId)
            
            
   
    // if (resinfo === null) return <Shimmer/>

    if (resinfo===null) return<Shimmer/>
    const { name,avgRating,costForTwo,cuisines } = resinfo?.cards?.[2]?.card?.card?.info ?? {}; //empty object handled
    // const {itemCards}=resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards 
    const menusectionnew=resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards??{};
    console.log("menusectionnew:", menusectionnew);
    const menucateogories = resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    console.log("menucateogories:", menucateogories);

const ItemList = menusectionnew
  .map((card) => card?.card?.card?.itemCards)
  .flat()
  .filter(Boolean); // Removes undefined values

console.log("Extracted Menu Items:", menusectionnew); // ✅ 
return (
        <div className="text-center">
            
                    <h1 className="font-bold my-2 text-2xl">{name}</h1>
                   <h2 className="text-lg font-bold">{cuisines}-{costForTwo+" Rs/"}</h2>
                    <h2>{avgRating}</h2>
                    {menucateogories.map((cateogory)=>(<RestaurantCategory data={cateogory?.card?.card}/>))}
                   <h2>Menu</h2>
                                     {/* {itemlist.map((item, index) => (
                  <li key={item?.card?.info?.id}>{item?.card?.info?.name ?? "Unnamed Item"}-{item?.card?.info?.price ?? "Unnamed Item"}</li>
  ))} */}

                   <ul>
                    {/* <li>{itemlist[0].dish.info.itemBadge.name}</li> */}
                    <li>parotta</li>
                   </ul>
                    
                    
        </div>
    )
}

export default RestaurantMenu