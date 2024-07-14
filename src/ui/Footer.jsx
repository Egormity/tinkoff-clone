import { Link, NavLink } from 'react-router-dom';

import logoFull from './../../public/logo-bank-dark.svg';
import logoVk from './../../public/icon-vk.svg';
import logoOk from './../../public/icon-ok.svg';
import logoTwitter from './../../public/icon-twitter.svg';
import logoTelegram from './../../public/icon-telegram.svg';

const links = [
  'О Т-Банке',
  'Новости',
  'Блог',
  'Работа',
  'Точки пополнения',
  'Банкоматы',
  'Курс валют',
  'Контакты',
  'Помощь',
  'Безопасность',
  'Для инвесторов',
];

const icons = [logoVk, logoOk, logoTwitter, logoTelegram];

export default function Footer() {
  return (
    <div className='bg-primary-dark text-primary-grey pb-6 pt-3 text-sm'>
      <div className='mx-auto grid max-w-4xl grid-cols-[1fr_15rem] gap-y-5 px-4'>
        <div className='col-span-full ml-[-1rem]'>
          <NavLink to='/'>
            <img src={logoFull} className='h-14' />
          </NavLink>
        </div>

        <div className='flex flex-wrap gap-x-4 gap-y-2 text-blue-500'>
          {links.map(link => (
            <NavLink className='duration-200 hover:text-blue-400' key={link}>
              {link}
            </NavLink>
          ))}
        </div>

        <div className='flex flex-col items-end justify-center justify-self-end'>
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

        <div className='flex items-center gap-x-4 justify-self-end'>
          {icons.map((icon, i) => (
            <Link key={i} className='w-8 rounded-full bg-stone-200 p-1 duration-200 hover:bg-stone-400'>
              <img src={icon} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
