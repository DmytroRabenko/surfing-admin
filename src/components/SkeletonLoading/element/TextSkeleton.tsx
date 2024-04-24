import { FC } from 'react';

import style from '../SkeletonLoading.module.scss';

interface TextSkeletonProps {

}

const TextSkeleton: FC<TextSkeletonProps> = () => {
  return (
    <div className={`${style.skeleton} ${style['skeleton--text']}`}></div>
  );
};

export default TextSkeleton;
