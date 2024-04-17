import { default as Chevron } from "src/assets/icons/chevron.svg?react";
import s from './NavbarUserMenu.module.scss';

const NavbarUserMenu = () => {
  return (
    <div className={s.NavbarUserMenu}>
      <div className={s.userImg}></div>
      <div className={s.userContent}>
        <div className={s.userInfo}>
          <span className={s.userInfo__name}>Evano</span>
          <span className={s.userInfo__position}>Project Manager</span>
        </div>
        <div className={s.shevron}>
         <Chevron/>
        </div>
      </div>
    </div>
  );
};
export default NavbarUserMenu;
