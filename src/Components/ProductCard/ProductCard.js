import React from "react";
import "./ProductCard.css";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  favouriteItems,
  removeFromFavourite,
} from "../../redux/reducer/user";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const [quantity, setQunatity] = useState(1);
  const { favList } = useSelector((state) => state.user);
  console.log(favList, "fav list");

  const dispatch = useDispatch();

  const isFavourite = favList.some((fav) => fav.id === product.id);

  // console.log(product, "product");

  const handleAddProduct = (product) => {
    // console.log(product, "add product");
    if (quantity <= 0) return;

    const cartData = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity,
      rating: product.rating.rate,
    };

    dispatch(addToCart(cartData));
    alert(`${product.title} added to cart!`);
  };

  const handleFavouriteItem = (product) => {
    if (isFavourite) {
      dispatch(removeFromFavourite(product.id));
    } else {
      alert(`${product.title} added to Favourite!`);

      const cartData = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: quantity,
        rating: product.rating.rate,
      };
      dispatch(favouriteItems(cartData));
    }
  };

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={product?.image} className="product-img" alt="product-img" />
      </div>
      <div className="title-details-container">
        <h4 className="product-title">{product?.title}</h4>
        <h6 className="product-price">{product?.price}/-</h6>
      </div>
      <div className="buttons-container">
        <button
          className="add-to-cart"
          onClick={() => {
            handleAddProduct(product);
          }}
        >
          Add to cart
        </button>
        <div className="quantity-container">
          <button
            className="quantity-btn"
            onClick={() => setQunatity(quantity - 1)}
            disabled={quantity === 0}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="quantity-btn"
            onClick={() => setQunatity(quantity + 1)}
          >
            +
          </button>
        </div>

        <button
          className="fav-button"
          onClick={() => handleFavouriteItem(product)}
        >
          {isFavourite ? (
            <MdFavorite className="fav-icon red" style={{ color: "red" }} />
          ) : (
            <MdFavoriteBorder className="fav-icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
