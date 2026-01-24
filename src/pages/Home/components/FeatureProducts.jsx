import { useState, useEffect } from 'react';
import { ProductCard } from '../../../components/Elements/ProductCard';
import { getFeaturedList } from '../../../services';
import { toast } from 'react-toastify';
export const FeatureProducts = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch featured products:', error);
        toast.error('Failed to load featured products. Please try again.');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex-column md:flex">
      {product.map((prod) => (
        <ProductCard product={prod} key={prod.id} />
      ))}
    </div>
  );
};
