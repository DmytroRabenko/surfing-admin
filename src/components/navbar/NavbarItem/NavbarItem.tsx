import { Link } from 'react-router-dom';
import { default as Chevron } from 'src/assets/icons/chevron.svg?react';
import s from './NavbarItem.module.scss';

interface NavbarItemProps {
  name: string;
  to: string;
  active: boolean;
}

const NavbarItem = ({ name, to, active, children }: React.PropsWithChildren<NavbarItemProps>) => {
  return (
    <li className={`${s.navbarItem} ${active ? s.active : ''}`}>
      <Link to={to}>
        <span className={s.navbarItem__icon}>{children}</span>
        <span className={`${s.navbarItem__content} ${active ? s.active : ''}`}>
          <span>{name}</span>
          <span className={s.chevron}>
            <Chevron />
          </span>
        </span>
      </Link>
    </li>
  );
};
export default NavbarItem;
