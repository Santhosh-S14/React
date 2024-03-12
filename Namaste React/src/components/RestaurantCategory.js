import { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleCategories = () => {
    setShowIndex(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50 border-b-2 border-gray-200">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleCategories}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>{showItems && <Itemlist items={data.itemCards} />}</div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
