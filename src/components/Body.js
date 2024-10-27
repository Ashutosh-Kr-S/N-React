import React, { useEffect } from "react";
import ResturantCard from "./ResturantCard";
import resList from "../Utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable
  let [listofRes, setListofRes] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.585089340468148&lng=77.21407055854797&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // setListofRes(json?.data?.cards[2]?.data?.data?.cards);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  const filterHandler = () => {
    listofRes = listofRes.filter((res) => res.info.avgRating >= 4.5);
    setListofRes(listofRes);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("btn-clicked");
            filterHandler();
          }}
        >
          top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRes.map((res) => (
          <ResturantCard key={res.info.id} resdata={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
