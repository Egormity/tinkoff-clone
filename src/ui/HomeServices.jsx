import { homeOffers } from '../data/tinkoffData';
import { implementToast } from '../utils/helpers';
import Button from './Button';
import Heading from './Heading';

export default function HomeServices() {
  return (
    <section className='text-center'>
      <Heading>Премиальный сервис</Heading>

      <p className='mt-8'>
        Кэшбэк до 60 000 ₽ в месяц, увеличенные лимиты на переводы, расширенная страховка в поездках и доступ
        в бизнес залы по всему миру
      </p>

      <Button additionalTailwindClasses='mt-10' customFunc={implementToast}>
        Стать премиум-клиентом
      </Button>

      <div className='relative mt-14 cursor-pointer' onClick={implementToast}>
        <div className='fade-out-bottom'></div>
        <img src='./../../public/landingPage/img-1.png' />
      </div>

      <div className='home-offers-grid mt-4 gap-x-2 gap-y-4 text-sm'>
        {homeOffers.map((offer, i) => (
          <div
            key={offer}
            className='flex cursor-pointer flex-col items-center justify-center text-stone-400 duration-[400ms] hover:text-inherit'
            onClick={implementToast}
          >
            <img src={`./../../public/landingPage/offer-${i + 1}.png`} />

            <p>{offer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
