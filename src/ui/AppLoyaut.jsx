import { Outlet } from 'react-router-dom';

import Loader from './Loader';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLoyaut() {
  return (
    <div className='grid grid-rows-[auto_1fr_auto]'>
      {false && <Loader />}

      <Navbar />

      <main className='mx-auto max-w-primary px-4'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
