import { NavLink } from 'react-router-dom';

import logoFull from './../../public/global/logo-bank-transp.svg';
import { RiUserForbidLine } from 'react-icons/ri';
import { RiUserFollowLine } from 'react-icons/ri'; // LOGGED IN ICON
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

import { navbarLinks } from '../data/tinkoffData';
import { useScreenSize } from '../utils/useScreenSize';
import { useState } from 'react';
import { implementToast } from '../utils/helpers';

function GenerteNavLinks() {
  return navbarLinks.map(link => (
    <button onClick={implementToast} key={link} className='duration-200 hover:text-stone-500'>
      {link}
    </button>
  ));
}

function PersonalAccount() {
  return (
    <button onClick={implementToast} className='flex items-center gap-3'>
      <span>Личный кабинет</span>
      <RiUserForbidLine className='text-2xl' />
    </button>
  );
}

export default function Navbar() {
  const { screenWidth } = useScreenSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='fixed z-50 w-full bg-white'>
      <ul className='relative mx-auto grid max-w-primary grid-cols-[auto_1fr_auto] items-center space-x-5 pr-4 max700px:grid-cols-[1fr_auto] max700px:px-10'>
        <li>
          <NavLink to='/'>
            <img src={logoFull} className='h-14' />
          </NavLink>
        </li>

        {screenWidth > 700 ? (
          <>
            <li className='space-x-5'>
              <GenerteNavLinks />
            </li>
            <li className='text-blue-700 duration-200 hover:text-blue-500'>
              <PersonalAccount />
            </li>
          </>
        ) : (
          <div
            className={`${isMenuOpen ? 'translate-x-[1.25rem] translate-y-[-1.25rem] rounded-lg p-[1.25rem] shadow-lg' : ''} absolute right-14 top-2 flex flex-col items-end space-y-8 bg-white`}
          >
            {!isMenuOpen ? (
              <IoMenu
                className='cursor-pointer text-[2.6rem] duration-200 hover:translate-y-[-1px]'
                onClick={() => setIsMenuOpen(curValue => !curValue)}
              />
            ) : (
              <IoClose
                className='cursor-pointer text-[2.6rem] duration-200 hover:translate-y-[-1px]'
                onClick={() => setIsMenuOpen(curValue => !curValue)}
              />
            )}

            {isMenuOpen && (
              <>
                <li className='flex flex-col items-end gap-4'>
                  <GenerteNavLinks />
                </li>
                <li className='text-blue-700 duration-200 hover:text-blue-500'>
                  <PersonalAccount />
                </li>
              </>
            )}
          </div>
        )}
      </ul>
    </nav>
  );
}
