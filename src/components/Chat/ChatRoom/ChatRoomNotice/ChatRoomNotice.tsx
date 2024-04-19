import { FC, Fragment } from 'react';

import Indicator from '../../Indicator/Indicator';

import FnImage from 'src/assets/icons/fn.svg?react'

import { formatRelativeDate } from 'src/utils/formatDate';

import { Message } from 'src/type/chat';

import style from './ChatRoomNotice.module.scss';
interface ChatRoomNoticeProps {
  message: Message;
  photoURL?: string | false;
  name?: string | false;
}

const ChatRoomNotice: FC<ChatRoomNoticeProps> = ({
  message,
  photoURL,
  name,
}) => {
  return (
    <div className={`${style.notice} ${style[`notice--${message.isIn ? 'in' : 'out'}`]}`}>
      <div className={style.notice__pic}>
        {photoURL ? <img src={photoURL} className={style.notice__img} /> : null}
      </div>
      <div className={`${style.notice__contentWrap} ${style[`notice__contentWrap--${photoURL ? 'last' : 'regular'}`]}`}>
        <div className={style.notice__content}>
          {name ? <div className={style.notice__title}>{name}</div> : null}
          <div className={style.notice__text}>
            {message.text.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))
            }
          </div>
          <div className={style.notice__fn}>
            <FnImage />
          </div>
        </div>
        <div className={style.notice__indWrap}>
          <div className={style.notice__date}>{formatRelativeDate(message.date)}</div>
          { message.isOut ? (
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
