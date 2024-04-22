import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarItem from './NavbarItem';
import NavbarUserMenu from './NavbarUserMenu';
import s from './navbar.module.scss';
import { default as Logo } from "src/assets/icons/logo.svg?react";

const navbarList = [
  { name: 'Dashboard', icon: 'dashboard', to: '/' },
  { name: 'Inventory', icon: 'inventory', to: '/inventory' },
  { name: 'Listings', icon: 'calendar', to: '/listings' },
  { name: 'Financials & Reports', icon: 'finance', to: '/financials' },
  { name: 'Booking calendar', icon: 'calendar', to: '/calendar' },
  { name: 'Messages', icon: 'message', to: '/messages' },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
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
        <div className={s.logo}>
          <Logo/>
        </div>
        <ul className={s.navbarList}>
          {navbarList &&
            navbarList.map(item => (
              <NavbarItem
                key={item.name}
                name={item.name}
                icon={item.icon}
                to={item.to}
                active={location.pathname === item.to}
              />
            ))}
        </ul>
      </div>
      <NavbarUserMenu />
    </div>
  );
};
export default Navbar;
