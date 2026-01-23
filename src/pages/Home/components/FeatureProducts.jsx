import { useState, useEffect } from 'react';
import { ProductCard } from '../../../components/Elements/ProductCard';
import { getFeaturedList } from '../../../services';
export const FeatureProducts = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFeaturedList();
      setProducts(data);
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
