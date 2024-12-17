import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../Utils/cartSlice";
const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearcart = () => {
        dispatch(clearCart());
    }
    return(
        <div className="flex flex-col p-4 m-4">
            <h1 className="text-2xl text-center font-bold">Cart Items</h1>
            <div className="flex flex-col w-1/3 mx-auto">
                {cartItems.length !== 0 &&  
                <button 
                    onClick={handleClearcart} 
                    className="bg-black w-3/12 text-white mx-auto my-3 p-2 rounded-lg">
                        Clear Cart
                </button>
                }
                {cartItems.length === 0 && <h1 className="mt-10 text-2xl text-center">Are't you Hungry 😋</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>    
    )
}

export default Cart