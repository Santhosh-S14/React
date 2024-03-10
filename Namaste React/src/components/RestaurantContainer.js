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

export const withPromotedLabel = (RestaurantContainer) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-0 left-0 bg-black text-white m-2 p-2 rounded-lg z-10">
          {props.resData.info.aggregatedDiscountInfoV3.header +
            " " +
            props.resData.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantContainer {...props} />
      </div>
    );
  };
};

export default RestaurantContainer;
