import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const removeItemCart=()=>{
        dispatch(clearCart())
    }
        

    return<div className="text-center p-4 m-4 ">
        <h1 className="font-bold text-xl">cart</h1>
        <button  className="p-2 m-2 rounded-2xl bg-black text-blue-50" onClick={removeItemCart}>Remove</button>
        <div className="w-6/12 m-auto"> <ItemList itemss={cartItems}/></div>
       {cartItems.length===0 && <h1>cart is empty.Add items to the cart</h1>}
        </div>;
}


export default Cart;