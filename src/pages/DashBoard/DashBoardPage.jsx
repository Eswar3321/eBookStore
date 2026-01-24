import { useEffect, useState } from 'react';
import { getUserOrders } from '../../services';
import { DashBoardCard } from './components/DashBoardCard';
import { DashBoardEmpty } from './components/DashBoardEmpty';
import { toast } from 'react-toastify';
import { useTitle } from '../../hooks/useTitle';
export const DashboardPage = () => {
  useTitle('Dashboard | eBookStore');
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
        toast.error('Failed to load your orders. Please try again.');
      }
    }
    fetchOrders();
  }, []);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {orders.length &&
          orders.map((order) => <DashBoardCard key={order.id} order={order} />)}
      </section>
      <section>{!orders.length && <DashBoardEmpty />}</section>
    </main>
  );
};
