import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    cartList: [],
    favList: [],
  },
  reducers: {
    setCartList: (state, action) => {
      state.cartList = action.payload;
    },

    addToCart: (state, action) => {
      if (!Array.isArray(state.cartList)) {
        state.cartList = [];
      }

      const newItem = action.payload;

      const existingItem = state.cartList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartList.push(newItem);
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartList = state.cartList.filter((item) => item.id !== id);
    },

    favouriteItems: (state, action) => {
      const favItem = action.payload;
      const exists = state.favList.find((item) => item.id === favItem.id);
      if (!exists) {
        state.favList.push(favItem);
      }
    },
    removeFromFavourite: (state, action) => {
      const id = action.payload;
      state.favList = state.favList.filter((item) => item.id !== id);
    },
  },
});

export default userSlice.reducer;
export const { addToCart, setCartList, removeFromCart, favouriteItems, removeFromFavourite } =
  userSlice.actions;
