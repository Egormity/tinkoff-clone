import { Outlet, useNavigation } from 'react-router-dom';

import Loader from './Loader';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLoyaut() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === 'loading';

  return (
    <div className='grid grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loader />}

      <Navbar />

      <main className='mx-auto max-w-4xl'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
