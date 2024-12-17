import React, { useState } from "react";
// import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../Utils/constants";
import useResturantMenu from "../Utils/useResturantMenu";
import ResturantCategories from "./ResturantCategories";

const ResturantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { redId } = useParams();

  const resInfo = useResturantMenu(redId);

  const [showIndex, setShowIndex] = useState(null);

  // console.log(redId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + redId
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   // setResInfo(json?.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( 
    c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);

  // console.log(itemCards);
  return (
    <div className=" ml-[25%] mr-[25%] mt-10 rounded-lg">
      <h1 className="font-bold text-2xl mx-5"
      >{name}</h1>
      <p className="font-semibold mx-5">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* { categories accordians} */}
      {
        categories.map((category , index) => {
          // controlled component
          return (
            <ResturantCategories 
            key={category.card.card.title} 
            data = {category?.card?.card} 
            showItems = {index === showIndex ? true :false}
            setShowIndex={() => setShowIndex(index)}
            />
          )
        })
      }
      {/* <ul>
        {
          itemCards.map((item) => <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}
          </li>)
        }
      </ul> */}
    </div>
  );
};

export default ResturantMenu;
