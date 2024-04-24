import { FC } from 'react';

import style from '../SkeletonLoading.module.scss';

interface ImageSkeletonProps {

}

const ImageSkeleton: FC<ImageSkeletonProps> = () => {
  return (
    <div className={`${style.skeleton} ${style['skeleton--img']}`}></div>
  );
};

export default ImageSkeleton;
