import ChatRoom from 'src/components/Chat/ChatRoom';
import UsersList from 'src/components/Chat/UsersList';

import style from './Chat.module.scss';

import { data } from './data';

const Chat = () => {
  const handlerSelectUser = (uid: string) => {
    console.log('handlerSelectUser', uid)
  }
  return (
    <div className={style.chat}>
      <div className={style.chat__users}>
        <UsersList contacts={data} selectUser={handlerSelectUser}/>
      </div>
      <div className={style.chat__room}>
        <ChatRoom />
      </div>
    </div>
  );
}

export default Chat;
