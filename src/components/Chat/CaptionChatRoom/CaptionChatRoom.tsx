import { FC } from 'react';

import Indicator from '../Indicator/Indicator';
import IconUser from '../IconUser/IconUser';

import { formatRelativeDate } from 'src/utils/formatDate';

import { User } from 'src/type/chat';

import style from './CaptionChatRoom.module.scss';
interface UserItemProps {
  user: User;
  selectUser: (uid: string) => void;
}

const CaptionChatRoom: FC<UserItemProps> = ({
  user,
  selectUser,
}) => {
  return (
    <div className={`${style.caption} ${user.isOpen ? style.active : ''}`} onClick={() => selectUser(user.uid)}>
      <div className={style.caption__pic}>
        <IconUser photoURL={user.photoURL} name={user.name} />
      </div>
      <div className={style.caption__info}>
        <div className={style.caption__userName}>{user.name}</div>
        <div className={style.caption__message}>
          <div className={style.caption__sign}>You:</div>
          <div className={style.caption__title}>{user.lastMessage}</div>
        </div>
      </div>
      <div className={style.caption__iconWrap}>
        <Indicator isRead={Boolean(user.isRead)} isSent={Boolean(user.isSent)} />
      </div>
      <div className={style.caption__date}>{formatRelativeDate(user.dateLastMassage)}</div>
    </div>
  );
};

export default CaptionChatRoom;
