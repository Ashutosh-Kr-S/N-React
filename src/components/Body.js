import React, { useEffect } from "react";
import ResturantCard, { withlabel } from "./ResturantCard";
import resList from "../Utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Body = () => {
  // local state variable
  let [listofRes, setListofRes] = useState([]);
  const [searchRes, setSearchRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const ResturantCardlabel = withlabel(ResturantCard);

  const {loggedInUser, setUserName} = useContext(UserContext);

  console.log(listofRes);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        "https://foodfire.onrender.com/api/restaurants?lat=12.9351929&lng=77.624480699999991&page_type=DESKTOP_WEB_LISTING"
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

  if (onlineStatus === false) {
    return (<h1>You are , Offline !! Check you'r Internet connection</h1>);
  }

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter m-5 mt-10 flex justify-center items-center space-x-5">
        <div className="search flex space-x-2">
          <input
            type="text"
            placeholder="search"
            className="search-box rounded-md border-none p-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn bg-purple-600 text-white rounded-md px-2 cursor-pointer"
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
          className="filter-btn bg-purple-600 text-white rounded-md px-2 py-1 cursor-pointer"
          onClick={() => {
            console.log("btn-clicked");
            filterHandler();
          }}
        >
          top rated restaurants
        </button>
        <div>
          <label className="text-green-300 font-bold">UserName : </label>
          <input
          type="text"
          placeholder="type....."
          className="search-box rounded-md border-none p-1"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>

      </div>
      <div className="res-container flex flex-wrap justify-center">
        {searchRes.map((res) => (
          <Link 
            to={"/resturant/"+ res.info.id}
            key={res.info.id}
          >
            {
              res.info.availability.opened ? <ResturantCardlabel resdata={res} /> :  <ResturantCard resdata={res} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
