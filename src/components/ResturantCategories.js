import ItemList from "./ItemList"
import { useState } from "react"

const ResturantCategories = ({data , showItems, setShowIndex}) =>{

    // const [showItems, setShowItems] = useState(false);

    const handleclick = () =>{
        setShowIndex();
        // console.log(showItems);
    };
    // console.log(data)
    return(
        <div>
            {/* accordian header */}
            <div className="width-full p-4 bg-gray-50 my-4 rounded-md shadow-md">
                <div className="flex justify-between cursor-pointer mb-3"  onClick={handleclick}>
                    <span className="text-lg font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
            {/* accordian body */}
            {showItems && <ItemList items={data.itemCards} /> }
            </div>
        </div>
    )
}

export default ResturantCategories