import HomeServices from './HomeServices';
import HomeClients from './HomeClients';
import HomeBank from './HomeBank';
import HomeAdditional from './HomeAdditional';

export default function Home() {
  return (
    <div className='space-y-24 pb-12 pt-28'>
      <HomeServices />
      <HomeClients />
      <HomeBank />
      <HomeAdditional />
    </div>
  );
}
