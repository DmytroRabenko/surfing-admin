import { FC } from 'react';

import SurfIcon from 'src/assets/icons/surf.svg?react';

import style from '../SkeletonLoading.module.scss';

interface DefaultSkeletonProps {

}

const DefaultSkeleton: FC<DefaultSkeletonProps> = () => {
  return (
    <div className={`${style.skeleton} ${style['skeleton--img']}`}>
      <SurfIcon width="30px" height="30px"/>
    </div>
  );
};

export default DefaultSkeleton;
