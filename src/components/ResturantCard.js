import React from 'react';
import { CDN_URL } from '../Utils/constants';

const styleCard = {
    backgroundColor: "lightyellow",
};

const ResturantCard = (props) => {
    const {resdata} = props;
  
    const{name,cuisines,costForTwo,avgRating,cloudinaryImageId} = resdata?.info;
  
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resdata.info.sla.deliveryTime} min</h4>
      </div>
    );
  };

  export default ResturantCard;