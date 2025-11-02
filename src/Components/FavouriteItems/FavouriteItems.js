import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import "./Cart.css";
import {
  addToCart,
  removeFromFavourite,
  removeFromCart,
} from "../../redux/reducer/user";
import "./FavouriteItems.css";

const FavouriteItems = () => {
  const dispatch = useDispatch();
  const { cartList, favList } = useSelector((state) => state.user);
  const [quantity, setQunatity] = useState(0);
  console.log(cartList, "cart");

  const handleDelete = (id) => {
    dispatch(removeFromFavourite(id));
  };
  console.log(favList, "fav");

  return (
    <div className="center-container">
      <div className="cart-container">
        <h1 style={{ color: "#f08d49" }}>Your Favourite Items</h1>
        <div className="cart-list-container">
          {favList?.length === 0 ? (
            <div className="no-items">No Favourite Items </div>
          ) : (
            favList?.map((eachCart) => (
              <div className="cart-list" key={eachCart.id}>
                <div className="img-title-container">
                  <div className="cart-img-container">
                    <img src={eachCart?.image} />
                  </div>
                  <div className="cart-title-container">
                    <h3>{eachCart.title}</h3>
                    <h4>
                      {eachCart?.price && eachCart.quantity
                        ? eachCart.price * eachCart.quantity
                        : eachCart.price}
                    </h4>
                    <p>{`rating ${eachCart.rating}`}</p>
                  </div>
                </div>

                <div style={{ width: "100%" }}>
                  <div className="quantity-delete-button-container">
                    <div className="quantity-container">
                      {/* <button
                      className="quantity-btn"
                      onClick={() => setQunatity(quantity - 1)}
                      disabled={quantity === 0}
                    >
                      -
                    </button>
                    <p>{eachCart?.quantity}</p>
                    <button
                      className="quantity-btn"
                      onClick={() => setQunatity(quantity + 1)}
                    >
                      +
                    </button> */}
                    </div>

                    <button
                      className="delete-button"
                      onClick={() => handleDelete(eachCart.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FavouriteItems;
