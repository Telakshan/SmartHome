import { CartItemType } from "../Models/CartItemType";
import { sumItems } from "./Store";

export const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item: CartItemType) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item: CartItemType) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item: CartItemType) => item.id !== action.payload.id),
        ],
      };
    case "INCREASE":
      state.cartItems[
        state.cartItems.findIndex((item: CartItemType) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "DECREASE":
      state.cartItems[
        state.cartItems.findIndex((item: CartItemType) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "CHECKOUT":
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };
    case "CLEAR":
      return {
        cartItems: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
};
