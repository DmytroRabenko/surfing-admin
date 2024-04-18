import { useState } from 'react';
import { default as Chevron } from 'src/assets/icons/chevron.svg?react';
import s from './NavbarUserMenu.module.scss';
import { Link } from 'react-router-dom';

const userMenuList = [
  {
    name: 'Profile',
    to: '#',
  },
  {
    name: 'Settings',
    to: '#',
  },
  {
    name: 'Sign out',
    to: '#',
  },
];

const NavbarUserMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div
      className={s.navbarUserMenu}
      onMouseEnter={() => {
        setIsOpenMenu(true);
      }}
      onMouseLeave={() => {
        setIsOpenMenu(false);
      }}
    >
      <div className={s.navbarUserMenu__button}>
        <div className={s.userImg}></div>
        <div className={s.userContent}>
          <div className={s.userInfo}>
            <span className={s.userInfo__name}>Evano</span>
            <span className={s.userInfo__position}>Project Manager</span>
          </div>
          <div className={`${s.chevron} ${isOpenMenu ? s.open : ''}`}>
            <Chevron />
          </div>
        </div>
      </div>
      <ul className={`${s.navbarUserMenu__content} ${isOpenMenu ? s.open : ''}`}>
        {userMenuList &&
          userMenuList.map(item => (
            <li key={item.name} className={s.navbarUserMenu__content__item}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default NavbarUserMenu;
