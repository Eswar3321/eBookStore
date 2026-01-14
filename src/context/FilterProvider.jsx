import { FilterContext, filterInitialState } from './filterContext';
import { filterReducer } from '../reducers/filterReducer.js';
import { useReducer } from 'react';

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);
  function initialProductList(products) {
    dispatch({
      type: 'PRODUCT_LIST',
      payload: {
        products: products,
      },
    });
  }

  function bestSeller(products) {
    return state.bestSellerOnly
      ? products.filter((prod) => prod.best_seller === true)
      : products;
  }

  function inStock(products) {
    return state.onlyInStock
      ? products.filter((prod) => prod.in_stock === true)
      : products;
  }

  function sort(products) {
    if (state.sortBy === 'lowtohigh') {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === 'hightolow') {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  }

  function rating(products) {
    if (state.ratings === '4STARABOVE') {
      return products.filter((prod) => prod.rating >= 4);
    }
    if (state.ratings === '3STARABOVE') {
      return products.filter((prod) => prod.rating >= 3);
    }
    if (state.ratings === '2STARABOVE') {
      return products.filter((prod) => prod.rating >= 2);
    }
    if (state.ratings === '1STARABOVE') {
      return products.filter((prod) => prod.rating >= 1);
    }
    return products;
  }

  const filterProductList = rating(
    sort(inStock(bestSeller(state.productList)))
  );
  const value = {
    state,
    dispatch,
    productList: filterProductList,
    initialProductList,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
