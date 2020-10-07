import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

function Image({ img, className }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeCartItem } = useContext(
    Context
  );

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((photo) => photo.id === img.id);

    if (alreadyInCart) {
      return (
        <i
          onClick={() => removeCartItem(img.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => addToCart(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} image-container`}
    >
      <img src={img.url} alt="" className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    artist: PropTypes.string,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
