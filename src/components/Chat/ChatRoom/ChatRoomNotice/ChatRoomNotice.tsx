import { FC, Fragment } from 'react';

import Indicator from '../../Indicator/Indicator';

import FnImage from 'src/assets/icons/fn.svg?react'

import { formatRelativeDate } from 'src/utils/formatDate';

import { Message } from 'src/type/chat';

import style from './ChatRoomNotice.module.scss';
import IconUser from '../../IconUser';
interface ChatRoomNoticeProps {
  message: Message;
  photoURL?: string;
  name: string;
  isFirstMessage: boolean;
  isLastMessage: boolean;
}

const ChatRoomNotice: FC<ChatRoomNoticeProps> = ({
  message,
  photoURL,
  name,
  isFirstMessage,
  isLastMessage,
}) => {
  return (
    <div className={`${style.notice} ${style[`notice--${message.isIn ? 'in' : 'out'}`]}`}>
      {isLastMessage ? (
          <div className={style.notice__pic}>
            <IconUser photoURL={photoURL} name={name} />
          </div>
        ) : (
          <div className={style.notice__picEmty}></div>
        )
      }
      <div className={`${style.notice__contentWrap} ${style[`notice__contentWrap--${isLastMessage ? 'last' : 'regular'}`]}`}>
        <div className={style.notice__content}>
          {isFirstMessage ? <div className={style.notice__title}>{name}</div> : null}
          <div className={style.notice__text}>
            {message.text.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))
            }
          </div>
          {isLastMessage ? (
              <div className={style.notice__fn}>
                <FnImage />
              </div>
            ) : null
          }
        </div>
        <div className={style.notice__indWrap}>
          <div className={style.notice__date}>{formatRelativeDate(message.date)}</div>
          {message.isOut ? (
              <div className={style.notice__ind}>
                <Indicator isRead={Boolean(message.isRead)} isSent={Boolean(message.isSent)} />
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  );
};

export default ChatRoomNotice;
