import { FC } from 'react';

import ChatRoomSearch from './ChatRoomSearch';
import ChatRoomTitle from './ChatRoomTitle';
import ChatRoomMenuButton from './ChatRoomMenuButton';
import ChatRoomControl from './ChatRoomControl';
import ChatRoomMessages from './ChatRoomMessages';

import { data } from './data';

import { data as users } from '../../../pages/Chat/data';

import style from './ChatRoom.module.scss';

interface ChatRoomProps {

}

const ChatRoom: FC<ChatRoomProps> = () => {
  return (
    <div className={style.chatRoom}>
      <div className={style.chatRoom__header}>
        <div className={style.chatRoom__title}>
          <ChatRoomTitle photoURL={users[1].photoURL} name={users[1].name}/>
        </div>
        <ul className={style.chatRoom__nav}>
          <li className={style.chatRoom__nav_item}>
            <ChatRoomSearch />
          </li>
          <li className={style.chatRoom__nav_item}>
            <ChatRoomMenuButton />
          </li>
        </ul>
      </div>
      <div className={style.chatRoom__main}>
        <ChatRoomMessages messages={data} user={users[1]}/>
      </div>
      <div className={style.chatRoom__footer}>
        <ChatRoomControl />
      </div>
    </div>
  );
};

export default ChatRoom;
