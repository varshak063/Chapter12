import { useDispatch, useSelector } from "react-redux";
import { CategoryItemList } from "./CategoryItemLists";
import { clearCart } from "../utils/cartSlice";

export const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartitems", cartItems);
  const dispatch = useDispatch();
  const handleClearButton = (cartItems) => {
    dispatch(clearCart(cartItems));
  };
  return (
    <>
      <div className="font-semibold m-4 p-4 m-auto text-center">
        <h1 className="text-2xl ">Cart Items</h1>
        <div className="m-auto w-6/12">
          <button
            onClick={() => handleClearButton(cartItems)}
            className="p-2 m-2 bg-black text-white rounded"
          >
            Clear cart
          </button>
          {cartItems?.length === 0 ? (
            <h1>No Items in the Cart</h1>
          ) : (
            <CategoryItemList items={cartItems} />
          )}
        </div>
      </div>
    </>
  );
};
