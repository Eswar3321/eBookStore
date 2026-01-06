import { useState, useEffect } from 'react';
import { ProductCard } from '../../../components/Elements/ProductCard';
export const FeatureProducts = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/featured_products');
      const json = await response.json();
      setProducts(json);
    };
    fetchData();
  }, []);

  return (
    <div className="flex">
      {product.map((prod) => (
        <ProductCard product={prod} key={prod.id} />
      ))}
    </div>
  );
};
