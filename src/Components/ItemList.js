import { useDispatch } from "react-redux";
import { RES_URL } from "../utils/constant";
import {addItem} from "../utils/cartSlice";

const ItemList=({itemss})=>{
    const dispatch=useDispatch()
    const handleAddItem=(item)=>{
        // dispatch an action
        dispatch(addItem(item))
    }
    return(
        <div>{itemss.map((item)=>(<div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">
         
           
           <div className="w-9/12">
           <div className="py-2 ">
                <span>{item.card.info.name}</span>
                <span>-{item.card.info.price/100}</span>
                
                
         </div>
         <div><span className="bg-cyan-400 align-baseline p-0">{item.card.info.ribbon.text}</span></div>
           </div>
           <div className="w-3/12 p-4">
            <div className="absolute">
                <button className="p-2 shadow-amber-50 bg-blue-50" onClick={()=>handleAddItem(item)}>Add+</button>
            </div>
            <img src={RES_URL + item.card.info.imageId} className="w-full"/>
            </div>
           
            
            
            
            
        </div>))}
        </div>
    );

}

export default ItemList;