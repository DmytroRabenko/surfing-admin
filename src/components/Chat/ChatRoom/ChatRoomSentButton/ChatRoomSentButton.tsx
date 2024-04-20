import { FC, MouseEventHandler } from 'react';

import Button from 'src/components/UI/Button';

import SentIcon from 'src/assets/icons/send.svg?react';

interface ChatRoomSentButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ChatRoomSentButton: FC<ChatRoomSentButtonProps> = ({onClick}) => {
  return (
    <Button mods={['modColorSecond', 'modeSize2']} onClick={onClick}>
      <SentIcon />
    </Button>
  );
};

export default ChatRoomSentButton;
