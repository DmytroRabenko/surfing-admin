import { Link } from 'react-router-dom';
import { default as Chevron } from 'src/assets/icons/chevron.svg?react';
import s from './NavbarItem.module.scss';

interface NavbarItemProps {
  name: string;
  to: string;
  active: boolean;
  icon: string;
}

const NavbarItem = ({ name, to, active, icon }: NavbarItemProps) => {
  return (
    <li className={`${s.navbarItem} ${active ? s.active : ''}`}>
      <Link to={to}>
        <span className={s.navbarItem__icon}>
          <img src={`/images/icons/${icon}.svg`} alt="shevron" />
        </span>
        <span className={`${s.navbarItem__content} ${active ? s.active : ''}`}>
          <span>{name}</span>
          <Chevron />
        </span>
      </Link>
    </li>
  );
};
export default NavbarItem;
