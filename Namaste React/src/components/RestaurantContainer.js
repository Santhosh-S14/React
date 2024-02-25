import { CDN_URL } from '../utils/constants';

const RestaurantContainer = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData.info;
    return (
      <div className="restaurant-card">
        <img
          className="restaurant-img"
          alt="restaurant-img"
          src={CDN_URL +cloudinaryImageId
          }
        ></img>
        <h3 style={{ fontSize: 16 }}>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantContainer;