import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductsList } from '../pages';
import { ProductDetail } from '../pages/ProductDetails';
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
