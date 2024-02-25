import RestaurantContainer from "./RestaurantContainer";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="restaurant-container">
          {resList.map((restaurant) => (
            <RestaurantContainer key={ restaurant.info.id } resData={ restaurant } />
          ))}
        </div>
      </div>
    );
  };

  export default Body;