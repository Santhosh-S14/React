import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { removeFromCart } from "../utils/cardSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(removeFromCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-4 p-4 rounded-lg bg-black text-white"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        <Itemlist items={cartItems}></Itemlist>
      </div>
    </div>
  );
};

export default Cart;
