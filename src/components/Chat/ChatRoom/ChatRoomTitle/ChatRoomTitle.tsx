import { FC } from 'react';

import style from './ChatRoomTitle.module.scss';
import IconUser from '../../IconUser';

interface ChatRoomTitleProps {
  photoURL: string | undefined;
  name: string;
}

const ChatRoomTitle: FC<ChatRoomTitleProps> = ({
  photoURL,
  name,
}) =>  (
  <div className={style.title}>
    <div className={style.title__pic}>
      <IconUser photoURL={photoURL} name={name} />
    </div>
    <span className={style.title__name}>{name}</span>
  </div>
);

export default ChatRoomTitle;
