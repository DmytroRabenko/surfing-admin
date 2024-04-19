import { FC } from 'react';

import CaptionChatRoom from '../CaptionChatRoom';

import { User } from 'src/type/chat';

import style from './UsersList.module.scss';

interface UsersListProps {
  contacts: User[];
  selectUser: (uid: string) => void;
}

const UsersList: FC<UsersListProps> = ({
  contacts,
  selectUser,
}) => {
  // const [idContact, setIdContact] = useState(contacts.find(contact => contact.isOpen === true)?.uid || contacts[0].uid);
  return (
    <ul className={style.user__list}>
      {contacts.map(contact => (
        <li key={contact.uid} className={style.user__item}>
         <CaptionChatRoom user={contact} selectUser={selectUser}/>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
