import { FC } from 'react';

import style from './IconUser.module.scss';

interface IconUserProps {
  photoURL?: string;
  name: string;
}

const IconUser: FC<IconUserProps> = ({
  photoURL,
  name,
}) => {
  if (photoURL) {
    return (
      <img src={photoURL} alt={name} className={style.iconUser__img}/>
    )
  }
  return (
    <div className={style.iconUser__text}>
      {name.split(' ').map(word => word.charAt(0).toUpperCase()).join('')}
    </div>
  );
};

export default IconUser;
