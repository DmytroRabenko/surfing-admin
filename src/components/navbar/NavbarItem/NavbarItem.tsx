import { Link } from 'react-router-dom';
import { default as Chevron } from 'src/assets/icons/chevron.svg?react';
//import useDynamicSvgImport from 'src/hooks/useDinamicImport';
import { default as Dashboard } from 'src/assets/icons/dashboard.svg?react';
import s from './NavbarItem.module.scss';

interface NavbarItemProps {
  name: string;
  to: string;
  active: boolean;
  icon: string;
}

const NavbarItem = ({ name, to, active, icon }: NavbarItemProps) => {
  console.log(icon);
  
 // const { SvgIcon } = useDynamicSvgImport(icon);
// {SvgIcon && <SvgIcon />}
  return (
    <li className={`${s.navbarItem} ${active ? s.active : ''}`}>
      <Link to={to}>
        <span className={s.navbarItem__icon}>
          <Dashboard/>
       
        </span>
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
/*
 <span className={s.navbarItem__icon}>
          <img src={`/images/icons/${icon}.svg`} alt="shevron" />
        </span>
 */
