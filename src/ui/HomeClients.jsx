import { useState } from 'react';
import { homeClientServices } from '../data/tinkoffData';
import Heading from './Heading';
import HomeCard from './HomeServiceCard';
import { useScreenSize } from '../utils/useScreenSize';
import { implementToast } from '../utils/helpers';
import Button from './Button';

export default function HomeClients() {
  const [activeSection, setActiveSection] = useState(0);
  const { screenWidth } = useScreenSize();

  return (
    <section className='grid justify-items-center gap-10 p-4 text-center'>
      <Heading>Более 40 млн клиентов выбрали Т‑Банк</Heading>

      <div className='flex gap-8 border-b'>
        {homeClientServices.map((service, i) => (
          <button
            data-btn={i}
            key={service}
            onClick={e => {
              // setActiveSection(+e.target.dataset.btn)
              if (+e.target.dataset.btn !== 0) implementToast();
            }}
            className={`${i === activeSection ? 'border-b-2 border-primary text-inherit' : ''} pb-4 text-stone-400 duration-[400ms] hover:translate-y-[-1px] hover:border-b-2 hover:border-stone-400 hover:text-inherit`}
          >
            {service}
          </button>
        ))}
      </div>

      <div className='grid gap-10'>
        <div className='grid grid-cols-2 gap-10 max700px:grid-cols-1'>
          <HomeCard
            heading='Подписка Pro в подарок'
            text='Еще больше кэшбэка и бонусов от Т-Банка и партнеров'
            btnText='Подключить'
            imagePath='../../public/landingPage/img-2.png'
          />
          <HomeCard
            heading='Т-Инвестиции'
            text='Понятные тарифы и удобное приложение'
            btnText='Стать инвестором'
            imagePath='../../public/landingPage/img-3.png'
          />
        </div>

        <div
          className={`${screenWidth <= 1000 && screenWidth >= 700 ? 'max1000px:grid-cols-4' : 'max1000px:grid-cols-1'} grid grid-cols-3 gap-10 max700px:grid-cols-1`}
        >
          <HomeCard
            heading='Вклады'
            text='Откройте вклад с пополнением и частичным изъятием. Каждый месяц получайте проценты на карту или вклад'
            btnText='Открыть вклад'
            imagePath='../../public/landingPage/img-4.png'
            additionalTailwindClasses={
              screenWidth <= 1000 && screenWidth >= 700 ? 'max1000px:col-start-1  max1000px:col-end-3' : ''
            }
          />
          <HomeCard
            heading='Авиабилеты в Путешествиях'
            text='Билеты российских и зарубежных авиакомпаний с возможностью копить мили и кэшбэком до 7%'
            btnText='Найти билет'
            imagePath='../../public/landingPage/img-5.png'
            additionalTailwindClasses={
              screenWidth <= 1000 && screenWidth >= 700 ? 'max1000px:col-start-3  max1000px:col-end-5' : ''
            }
          />
          <HomeCard
            heading='В кино дешевле с Т-Банком'
            text='Кэшбэе до 20% про покупке билетов'
            btnText='Купить билеты'
            imagePath='../../public/landingPage/img-6.png'
            additionalTailwindClasses={
              screenWidth <= 1000 && screenWidth >= 700 ? 'max1000px:col-start-2  max1000px:col-end-4' : ''
            }
          />
        </div>
      </div>

      <Button
        customFunc={implementToast}
        type='border'
        tailwindPadding='px-4 py-3'
        tailwindTextSize='text-base'
      >
        Все продукты
      </Button>
    </section>
  );
}
