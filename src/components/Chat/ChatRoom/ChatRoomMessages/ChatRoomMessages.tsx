import { FC } from 'react';

import { Message, User } from 'src/type/chat';

import style from './ChatRoomMessages.module.scss';
import ChatRoomNotice from '../ChatRoomNotice';

interface ChatRoomMessagesProps {
  messages: Message[];
  user: User;
}

const checkLastMassage = (message: Message, nextMessage: Message) => {
  return (message.isIn == nextMessage.isOut || message.isOut == nextMessage.isIn)
}

const checkFirstMassage = (message: Message, prevMessage: Message) => {
  return (message.isIn == prevMessage.isOut || message.isOut == prevMessage.isIn)
}

const ChatRoomMessages: FC<ChatRoomMessagesProps> = ({
  messages,
  user,
}) => {
  return (
    <div className={style.messages}>
      <ul className={style.messages__list}>
        {messages.map((message, index) => (
          <li
            key={message.id}
            className={`${style.messages__item} ${
              messages.length === index + 1 ||
              checkLastMassage(message, messages[index + 1])
              ?
              style['messages__item--last']
              :
              ''}`
            }
          >
            <ChatRoomNotice
              message={message}
              photoURL={(
                message.isIn &&
                  (
                    messages.length === index + 1 ||
                    checkLastMassage(message, messages[index + 1])
                  )
                ) && user.photoURL
              }
              name={(
                message.isIn &&
                  (
                    index === 0 ||
                    checkFirstMassage(message, messages[index - 1])
                  )
                ) && user.name
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomMessages;
