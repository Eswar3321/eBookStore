import { createContext, useContext } from 'react';

export const cartIntialState = {
  cartList: [],
  total: 0,
};

export const CartContext = createContext(cartIntialState);

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
