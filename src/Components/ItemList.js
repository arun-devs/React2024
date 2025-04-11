import { RES_URL } from "../utils/constant";

const ItemList=({itemss})=>{
    return(
        <div>{itemss.map((item)=>(<div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex">
           <img src={RES_URL + item.card.info.imageId} className="w-14"/>
           <div>
           <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>-{item.card.info.price/100}</span>
                
                
         </div>
         <div><span className="bg-cyan-400">{item.card.info.ribbon.text}</span></div>
           </div>
           
            
            
            
            
            
        </div>))}
        </div>
    );

}

export default ItemList;