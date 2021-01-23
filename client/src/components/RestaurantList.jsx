import React from "react";
import { useHistory } from "react-router-dom";

function RestaurantList(props) {
  
  return (
    <div className="restaurant-list">
      {props.children}
    </div>
  );
}

export default RestaurantList;
