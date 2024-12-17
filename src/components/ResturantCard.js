import React from 'react';
import { CDN_URL } from '../Utils/constants';

const styleCard = {
    backgroundColor: "lightyellow",
};

const ResturantCard = (props) => {
    const {resdata} = props;
  
    const{name,cuisines,costForTwo,avgRating,cloudinaryImageId} = resdata?.info;
  
    return (
      <div className="res-card w-[300px] z-1 m-2 p-2 bg-gradient-to-b from-yellow-500 to-yellow-50 rounded-lg hover:shadow-lg hover:scale-95 hover:bg-gradient-to-b hover:from-green-500 hover:to-green-100 hover:transition-all delay-75 " style={styleCard}>
        <img
          className="res-logo object-cover rounded-lg bg-gradient-to-t from-black to-white"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3 className='font-bold py-2 text-lg'>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resdata.info.sla.deliveryTime} min</h4>
      </div>
    );
  };

  //Higher order component
export const withlabel = (ResturantCard) =>{
  return (props) => {
    return (
      <div>
        <label className='absolute -mt-1 z-10 bg-black text-white p-2 m-2 rounded-lg '>Open</label>
        <ResturantCard {...props}/>
      </div>
    );
  };
};

  export default ResturantCard;