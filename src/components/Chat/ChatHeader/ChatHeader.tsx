import { FC, ReactNode } from 'react';

import style from './ChatHeader.module.scss';

interface ChatHeaderProps {
  children: ReactNode;
}

const ChatHeader: FC<ChatHeaderProps> = ({children}) => {
  return (
    <div className={style.header}>
      {children}
    </div>
  );
};

export default ChatHeader;
