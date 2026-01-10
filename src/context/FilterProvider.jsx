import { FilterContext } from './filterContext';

export const FilterProvider = ({ children }) => {
  const value = {
    productList: [1, 2, 3],
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
