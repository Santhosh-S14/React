import { MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log(MENU_URL + resId);
    const res = await fetch(MENU_URL + resId);
    const data = await res.json();
    console.log(data);
    setResInfo(data);
  };
  return resInfo;
};

export default useRestaurantMenu;
