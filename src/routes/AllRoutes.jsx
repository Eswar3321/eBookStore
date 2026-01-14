import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  ProductsList,
  ProductDetails,
  Login,
  Register,
} from '../pages';

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
