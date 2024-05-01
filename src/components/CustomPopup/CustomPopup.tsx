import { ReactNode } from 'react';
import Popup from 'reactjs-popup';
import styles from './CustomPopup.module.scss';
import './popup.scss';
import CloseIcon from '../../assets/icons/close.svg?react';

type Props = {
  children: ReactNode;
  title?: string;
  open: boolean;
  closeModal: () => void;
};
const CustomPopup = ({ children, title, open, closeModal }: Props) => {
  return (
    <Popup open={open} closeOnDocumentClick onClose={closeModal} modal>
      <div className={styles.popover}>
        <header className={styles.popover__header}>
          <h2 className={styles.popover__name}>{title}</h2>
          <button onClick={closeModal} className={styles.popover__btn}>
            <CloseIcon />
          </button>
        </header>
        {children}
      </div>
    </Popup>
  );
};

export default CustomPopup;
