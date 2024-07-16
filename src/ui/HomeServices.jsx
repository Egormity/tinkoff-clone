import { homeOffers } from '../data/tinkoffData';
import Button from './Button';

export default function HomeServices() {
  return (
    <section className='text-center'>
      <h1 className='text-5xl font-black'>Премиальный сервис</h1>

      <p className='mt-8'>
        Кэшбэк до 60 000 ₽ в месяц, увеличенные лимиты на переводы, расширенная страховка в поездках и доступ
        в бизнес залы по всему миру
      </p>

      <Button to='/' additionalTailwindClasses='mt-10'>
        Стать премиум-клиентом
      </Button>

      <div className='relative mt-14'>
        <div className='fade-out-bottom'></div>
        <img src='./../../public/landingPage/img-1.png' />
      </div>

      <div className='home-offers-grid mt-4 gap-x-2 gap-y-4'>
        {homeOffers.map((offer, i) => (
          <div key={offer} className='flex flex-col items-center justify-center'>
            <img src={`./../../public/landingPage/offer-${i + 1}.png`} />
            <p>{offer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
