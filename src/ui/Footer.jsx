import { Link, NavLink } from 'react-router-dom';

import logoFull from './../../public/global/logo-bank-dark.svg';
import { footerLinks, footerMediaIcons, footerMediaLinks } from '../data/tinkoffData';

export default function Footer() {
  return (
    <div className='bg-primary-dark pb-6 pt-3 text-sm text-primary-grey'>
      <div className='max-w-primary mx-auto grid grid-cols-[1fr_15rem] gap-y-5 px-4 max700px:grid-cols-1'>
        <div className='col-span-full ml-[-1rem]'>
          <NavLink to='/'>
            <img src={logoFull} className='h-14' />
          </NavLink>
        </div>

        <div className='flex flex-wrap gap-x-4 gap-y-2 text-blue-500'>
          {footerLinks.map(link => (
            <NavLink className='duration-200 hover:text-blue-400' key={link}>
              {link}
            </NavLink>
          ))}
        </div>

        <div className='flex flex-col items-end justify-center justify-self-end max700px:justify-self-start'>
          <Link to='/' className='text-xl font-bold text-white duration-200 hover:text-stone-300'>
            8 800 333-33-33
          </Link>
          <p>Для звонков по России</p>
        </div>

        <div className='col-span-full'>
          <p>
            Карта «Платинум» от АО «ТБанк» — победитель в номинации «Лучшая кредитная карта» по результатам
            онлайн-голосования премии «Сравни» сервиса Сравни.ру в 2023 г. среди 3-х кредитных организаций по
            параметрам: а) большой льготный период для пользователей карты, б) оперативный сервис и
            коммуникации с клиентом, в) удобное получение карты.
          </p>
        </div>

        <div className='col-span-full border-b border-b-stone-600 pb-5'>
          <p>
            АО «ТБанк» использует файлы «cookie», с целью персонализации сервисов и повышения удобства
            пользования веб-сайтом. «Cookie» представляют собой небольшие файлы, содержащие информацию о
            предыдущих посещениях веб-сайта. Если вы не хотите использовать файлы «cookie», измените настройки
            браузера.
          </p>
        </div>

        <div className='flex items-center'>
          <p>© 2006—2024, АО «ТБанк», официальный сайт, универсальная лицензия ЦБ РФ № 2673</p>
        </div>

        <div className='flex items-center gap-x-4 justify-self-end max700px:justify-self-start'>
          {footerMediaIcons.map((Icon, i) => (
            <a
              href={footerMediaLinks[i]}
              target='_blank'
              key={i}
              className='text-xl duration-200 hover:text-slate-200'
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
