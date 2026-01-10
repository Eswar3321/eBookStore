import { useContext } from 'react';
import { FilterContext } from './filterContext';

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used inside FilterProvider');
  }

  return context;
};
