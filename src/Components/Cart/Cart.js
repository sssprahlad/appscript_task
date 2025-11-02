import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { addToCart, removeFromCart } from "../../redux/reducer/user";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.user);
  const [quantity, setQunatity] = useState(0);
  console.log(cartList, "cart");

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="center-container">
      <div className="cart-container">
        <h1>Cart</h1>
        <div className="cart-list-container">
          {/* <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>
              {cartList?.map((eachCart, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img className="cart-product-image" src={eachCart.image} />
                  </td>
                  <td>
                    <h4>{eachCart.title}</h4>
                  </td>
                  <td>
                    <h4>{eachCart.price * eachCart.quantity}</h4>
                  </td>
                  <td>
                    <h4>{eachCart.quantity}</h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          {cartList?.map((eachCart) => (
            <div className="cart-list" key={eachCart.id}>
              <div className="img-title-container">
                <div className="cart-img-container">
                  <img src={eachCart?.image} />
                </div>
                <div className="cart-title-container">
                  <h3>{eachCart?.title}</h3>
                  <h4>
                    {eachCart?.price} * {eachCart.quantity} ={" "}
                    {eachCart.price * eachCart.quantity}/-
                  </h4>
                  <p>{`rating : ${eachCart.rating}`}</p>
                </div>
              </div>

              <div style={{ width: "100%" }}>
                <div className="quantity-delete-button-container">
                  <div className="cart-quantity-container">
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
                    <p>{`Quantity : ${eachCart.quantity}`}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
