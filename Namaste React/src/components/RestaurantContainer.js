import { CDN_URL } from "../utils/constants";

const RestaurantContainer = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <div className="h-40 overflow-hidden rounded-lg">
        <img
          className="object-cover w-full h-full rounded-lg"
          alt="restaurant-img"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantContainer;
