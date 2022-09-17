import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import UserRoutes from 'UserRoutes';
import Navbar from './Navbar/Navbar';

import { current } from 'redux/auth/auth-operations';

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(current());
  }, [dispatch])

  return (
    <section>
      <Navbar />
      <UserRoutes />
    </section>
  );
}
