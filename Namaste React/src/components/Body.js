import RestaurantContainer from "./RestaurantContainer";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn" 
          onClick={ () => {
            const filteredList = listOfRestaurants.filter( 
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantContainer key={ restaurant.info.id } resData={ restaurant } />
        ))}
      </div>
    </div>
  );
  };

  export default Body;