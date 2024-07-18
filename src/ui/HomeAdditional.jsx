import { IoGiftSharp } from 'react-icons/io5';
import { TbHelpTriangleFilled } from 'react-icons/tb';
import { IoStar } from 'react-icons/io5';

import Button from './Button';
import Heading from './Heading';
import HomeAdditionalCard from './HomeAdditionalCard';
import { useScreenSize } from '../utils/useScreenSize';
import { implementToast } from '../utils/helpers';

export default function HomeAdditional() {
  const { screenWidth } = useScreenSize();

  return (
    <section className='space-y-10 text-center'>
      <Heading>Дополнительно</Heading>

      <div className='flex items-center justify-between rounded-3xl bg-blue-500 p-4 text-sm text-white'>
        <div className='flex items-center gap-x-4'>
          <span className='text-2xl'>
            <IoGiftSharp />
          </span>
          <p>Рекомендуйте друзьям Т‑Банк. Получайте от 500 ₽</p>
        </div>
        <Button
          customFunc={implementToast}
          type='border'
          bgTransparent={true}
          tailwindTextSize='text-xm'
          tailwindPadding='px-2 py-1'
        >
          Рекомендовать Т-Банк
        </Button>
      </div>

      <div className='grid gap-10'>
        <div className='grid grid-cols-2 gap-10 max700px:grid-cols-1'>
          <HomeAdditionalCard
            icon={<TbHelpTriangleFilled />}
            heading='Помощь'
            text='Отвечаем на вопросы по всем продуктам'
            btnText='Подробнее'
          />
          <HomeAdditionalCard
            icon={<IoStar />}
            heading='Т-Банк отзывы'
            text='Выбирайте продукты Т-Банк, машазины, рестораны, сервисы и бренды на основе реальных отзывов'
            btnText='Подробнее'
          />
        </div>

        <div
          className={`${screenWidth <= 1000 && screenWidth >= 700 ? 'max1000px:grid-cols-4' : 'max1000px:grid-cols-1'} grid grid-cols-3 gap-10 max700px:grid-cols-1`}
        >
          <HomeAdditionalCard
            heading='Как выбрать выгодный вклад'
            text='На что обратить внимание, кроме процентной ставки'
            btnText='Читать'
            standOut={true}
            additionalTailwindClasses={
              screenWidth <= 1000 && screenWidth >= 700 ? 'max1000px:col-start-1  max1000px:col-end-3' : ''
            }
          />
          <HomeAdditionalCard
            heading='Как устроен предит на образование с господдержкой'
            btnText='Читать'
            text='Под 3% годовых'
            additionalTailwindClasses={
              screenWidth <= 1000 && screenWidth >= 700 ? 'max1000px:col-start-3  max1000px:col-end-5' : ''
            }
          />
          <HomeAdditionalCard
            heading='До 3 000 000 Р на погашение ипотеки'
            text='Оформите ипочечную страховку до 31 июля и участвуйте в акции'
            btnText='Читать'
            additionalTailwindClasses={
              screenWidth <= 1000 && screenWidth >= 700 ? 'max1000px:col-start-2  max1000px:col-end-4' : ''
            }
          />
        </div>
      </div>
    </section>
  );
}
