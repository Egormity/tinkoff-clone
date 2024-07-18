import { implementToast } from '../utils/helpers';
import Button from './Button';
import Heading from './Heading';

export default function HomeBank() {
  return (
    <section className='space-y-20'>
      <div className='grid grid-cols-2 justify-items-center rounded-3xl bg-slate-200 max900px:grid-cols-1'>
        <div className='grid items-center gap-6 p-10 max900px:pb-0'>
          <img src='../../public/global/favicon.png' className='h-32 w-32 rounded-[2.25rem]' />
          <div className='space-y-3'>
            <Heading sizeType='secondary'>Лучший мобильный банк в мире</Heading>
            <p>По версии Global Finance - Best Digital Bank Award 2020</p>
          </div>
        </div>

        <img src='../../public/landingPage/img-7.png' />
      </div>

      <div className='mx-auto max-w-[56rem]'>
        <div className='mx-auto max-w-[49rem] text-center'>
          <Heading>Пять наград премии "Банк года"</Heading>
          <p className='mt-8'>
            Мы признаны лучшими во множестве категорий, включая «Забота о клиенте», «Digital-банк года»,
            «Инвестиционная компания года»
          </p>
          <Button
            customFunc={implementToast}
            type='border'
            tailwindPadding='px-4 py-3'
            additionalTailwindClasses='mt-12'
          >
            Узнать больше
          </Button>
        </div>

        <img src='../../public/landingPage/img-8.png' className='mt-8' />
      </div>
    </section>
  );
}
