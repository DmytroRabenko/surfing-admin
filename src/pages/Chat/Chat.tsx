import { useState } from 'react';

import ChatRoom from 'src/components/Chat/ChatRoom';
import ChatPanel from 'src/components/Chat/ChatPanel';

import style from './Chat.module.scss';

import { data } from './data';
import {data as messages} from './messages'

const Chat = () => {
  const [uid, SetUid] = useState(data[0].uid);

  const handlerSelectUser = (uid: string) => {
    SetUid(uid);
  }

  return (
    <div className={style.chat}>
      <div className={style.chat__panel}>
        <ChatPanel contacts={data} selectUser={handlerSelectUser} uid={uid}/>
      </div>
      <div className={style.chat__room}>
        <ChatRoom
          messages={messages.filter(message => message.uid === uid)}
          user={data.filter(user => user.uid === uid)[0]}
        />
      </div>
    </div>
  );
}

export default Chat;
