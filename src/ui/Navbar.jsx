import { NavLink } from 'react-router-dom';

import logoFull from './../../public/logo-bank-transp.svg';
import userNotLoggedIcon from '../../public/user-not-logged.svg';

const links = ['Частным лицам', 'Бизнесу', 'Премиум', 'Еще'];

export default function Navbar() {
  return (
    <div className='bg-stone-200'>
      <ul className='mx-auto grid max-w-4xl grid-cols-[auto_1fr_auto] items-center space-x-5 pr-4'>
        <li>
          <NavLink to='/'>
            <img src={logoFull} className='h-14' />
          </NavLink>
        </li>
        <li className='space-x-5'>
          {links.map(link => (
            <NavLink to='/' key={link} className='duration-200 hover:text-stone-500'>
              {link}
            </NavLink>
          ))}
        </li>
        <li className='text-blue-700 duration-200 hover:text-blue-500'>
          <NavLink className='flex items-center gap-3'>
            <span>Личный кабинет</span>
            <img src={userNotLoggedIcon} className='h-6' />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
