//import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarItem from './NavbarItem';
import NavbarUserMenu from './NavbarUserMenu';
import { useMenu } from 'src/Layout/MenuContext';
import { default as Logo } from 'src/assets/icons/logo.svg?react';
import { default as Dashboard } from 'src/assets/icons/dashboard.svg?react';
import { default as Inventory } from 'src/assets/icons/inventory.svg?react';
import { default as Listings } from 'src/assets/icons/listings.svg?react';
import { default as Finance } from 'src/assets/icons/finance.svg?react';
import { default as Calendar } from 'src/assets/icons/calendar.svg?react';
import { default as Message } from 'src/assets/icons/message.svg?react';
import s from './Navbar.module.scss';


const navbarList = [
  { name: 'Dashboard', icon: Dashboard, to: '/' },
  { name: 'Inventory', icon: Inventory, to: '/inventory' },
  { name: 'Listings', icon: Listings, to: '/listings' },
  { name: 'Financials & Reports', icon: Finance, to: '/financials' },
  { name: 'Booking calendar', icon: Calendar, to: '/calendar' },
  { name: 'Messages', icon: Message, to: '/chat' },
];

const Navbar = () => {
  const location = useLocation();
  const {isOpenMenu, setIsOpenMenu} = useMenu();
  return (
    <div
      className={`${s.nav__bar} ${isOpenMenu ? s.open : ''}`}
      onMouseEnter={() => {
        setIsOpenMenu(true);
      }}
      onMouseLeave={() => {
        setIsOpenMenu(false);
      }}
    >
      <div>
        <Link to='/' className={s.logo}>
          <Logo />
        </Link>
        <ul className={s.navbarList}>
          {navbarList &&
            navbarList.map(item => (
              <NavbarItem
                key={item.name}
                name={item.name}
                to={item.to}
                active={location.pathname === item.to}
              >
                <item.icon />
              </NavbarItem>
            ))}
        </ul>
      </div>
      <NavbarUserMenu />
    </div>
  );
};
export default Navbar;
