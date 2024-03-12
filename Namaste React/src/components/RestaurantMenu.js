import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[0].card.card.info;

  let itemCards = null;
  if (
    resInfo.data.cards[2].groupedCard.cardGroupMap?.REGULAR?.cards[2].card.card
      .itemCards
  ) {
    itemCards =
      resInfo.data.cards[2].groupedCard.cardGroupMap?.REGULAR?.cards[2].card
        .card.itemCards;
  } else if (
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards
  ) {
    itemCards =
      resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards;
  }

  const categories =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
