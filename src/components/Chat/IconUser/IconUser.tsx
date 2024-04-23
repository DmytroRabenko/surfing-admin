import { FC } from 'react';

import ImageLoading from 'src/components/UI/ImageLoading';

import style from './IconUser.module.scss';

interface IconUserProps {
  photoURL?: string;
  name: string;
}

const IconUser: FC<IconUserProps> = ({
  photoURL,
  name,
}) => {
  return (
    <div className={style.iconUser__text}>
      { photoURL ? (
      <ImageLoading src={photoURL} alt={name} className={style.iconUser__img}/>
      ) : (
        name.split(' ').map(word => word.charAt(0).toUpperCase()).join('')
      )}
    </div>
  );
};

export default IconUser;
