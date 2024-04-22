import { ChangeEvent, FC, useRef, useState } from 'react';

import ChatRoomAttachButton from '../ChatRoomAttachButton';
import ChatRoomSendButton from '../ChatRoomSendButton';

import style from './ChatRoomControl.module.scss';

interface ChatRoomControlProps {

}

const initRows = 1;

const ChatRoomControl: FC<ChatRoomControlProps> = () => {
  const [message, setMessage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleAttachClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('Select file', file);
  };

  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    e.target.rows = e.target.value.split('\n').length;
  }

  const handleSendClick = () => {
    console.log('Sent massege', message);
    setMessage('');
    if (textAreaRef.current) {
      textAreaRef.current.rows = initRows;
    }
  }

  return (
    <>
      <div className={style.control}>
        <div className={style.control__inputWrap}>
          <div className={style.control__attachWrap}>
            <ChatRoomAttachButton onClick={handleAttachClick} />
          </div>
          <div className={style.control__textAreaWrap}>
            <textarea
              ref={textAreaRef}
              value={message}
              onChange={handleChangeMessage}
              className={style.control__input}
              placeholder="Write a message..."
              rows={initRows}
            />
          </div>
        </div>
        <ChatRoomSendButton onClick={handleSendClick}/>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange} />
    </>
  );
};

export default ChatRoomControl;
