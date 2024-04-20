import { FC } from 'react';

import CaptionChatRoom from '../CaptionChatRoom';
import ChatHeader from '../ChatHeader';

import { User } from 'src/type/chat';

import style from './ChatPanel.module.scss';

interface ChatPanelProps {
  uid: string;
  contacts: User[];
  selectUser: (uid: string) => void;
}

const ChatPanel: FC<ChatPanelProps> = ({
  uid,
  contacts,
  selectUser,
}) => {
  return (
    <div className={style.panel}>
      <ChatHeader>
        <div className={style.panel__info}>
          <div className={style.panel__infoName}>Main chat</div>
          <div className={style.panel__infoValue}>{contacts.length}</div>
        </div>
      </ChatHeader>
      <ul className={style.panel__list}>
      {contacts.map(contact => (
        <li key={contact.uid} className={style.panel__item}>
          <CaptionChatRoom user={contact} selectUser={selectUser} uid={uid} />
        </li>
      ))}
      </ul>
    </div>
  );
};

export default ChatPanel;
