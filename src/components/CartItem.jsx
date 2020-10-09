import React, { useContext } from "react";
import { Context } from "../Context";

function CartItem({ item }) {
  const { removeCartItem } = useContext(Context);
  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeCartItem(item.id)}
      ></i>
      <img className="cart-item-img" src={item.url} />
      <p className="item-price">$5.99</p>
    </div>
  );
}

export default CartItem;
