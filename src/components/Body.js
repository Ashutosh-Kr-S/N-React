import React, { useEffect } from "react";
import ResturantCard from "./ResturantCard";
import resList from "../Utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // local state variable
  let [listofRes, setListofRes] = useState([]);
  const [searchRes, setSearchRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      console.log(json);
      setListofRes(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setSearchRes(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  const filterHandler = () => {
    listofRes = listofRes.filter((res) => res.info.avgRating >= 4.5);
    setSearchRes(listofRes);
  };

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchedResturant = listofRes.filter((res) => {
                // console.log(res.info.name);
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              searchedResturant.length === 0
                ? setSearchRes(listofRes)
                : setSearchRes(searchedResturant);
            }}
          >
            search
          </button>
        </div>
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
        {searchRes.map((res) => (
          <Link 
            to={"/resturant/"+ res.info.id}
            key={res.info.id}
          >
          <ResturantCard resdata={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
