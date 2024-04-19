import { FC } from 'react';

import style from './ChatRoomTitle.module.scss'

interface ChatRoomTitleProps {
  photoURL: string;
  name: string;
}

const ChatRoomTitle: FC<ChatRoomTitleProps> = ({
  photoURL,
  name,
}) =>  (
  <div className={style.title}>
    <div className={style.title__pic}>
      <img src={photoURL} alt={name} className={style.title__img} />
    </div>
    <span className={style.title__name}>{name}</span>
  </div>
);

export default ChatRoomTitle;
