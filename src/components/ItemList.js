import { CDN_URL } from "../Utils/constants"
import { useDispatch } from "react-redux";
import { addItems } from "../Utils/cartSlice";

const ItemList = ({items}) =>{

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // Dsipatch an action;
        // dispatch(addItem("pizza"));
        dispatch(addItems(item));
    }

    return(
        <div>
            {items.map((item,index) => (
                <div  key={item.card.info.id} className=" border-b-2 py-3 border-gray-200">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className="font-semibold">{item.card.info.name}</span>
                            <div className="pb-2">
                                <span className="line-through">{(item.card.info.price)/100 ? "₹"+ item.card.info.price/100 : ""}</span>
                                {"  "}
                                <span>{(item.card.info.finalPrice)/100 ?  "₹"+ item.card.info.finalPrice/100 : "₹"+ item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="relative w-[400px] ml-5 mb-8 flex flex-col justify-center items-end">
                            <div className="h-40 w-40 m-3">
                                <img src={CDN_URL+item.card.info.imageId} className="m-3 w-full h-full rounded-2xl"/>
                            </div>
                            <button 
                                onClick={() => handleAddItem(item)} 
                                className="absolute top-[150px] right-10 text-green-600 rounded-md p-3 text-center font-bold drop-shadow-xl bg-white">
                                ADD+
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList