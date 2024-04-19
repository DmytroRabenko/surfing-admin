import { ChangeEvent, FC, useRef } from 'react';

import ChatRoomAttachButton from '../ChatRoomAttachButton';
import ChatRoomSentButton from '../../ChatRoomSentButton';

import style from './ChatRoomControl.module.scss';

interface ChatRoomControlProps {

}

const ChatRoomControl: FC<ChatRoomControlProps> = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('Select file', file);
  };

  return (
    <>
      <div className={style.control}>
        <div className={style.control__inputWrap}>
          <div className={style.control__attachWrap}>
            <ChatRoomAttachButton onClick={handleButtonClick} />
          </div>
          <div className={style.control__textAreaWrap}>
            <textarea name="" id="" className={style.control__input} placeholder="Write a message..."></textarea>
          </div>
        </div>
        <ChatRoomSentButton />
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
