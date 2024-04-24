import { CSSProperties, FC } from 'react';

import SurfIcon from 'src/assets/icons/surf.svg?react';

import styles from '../SkeletonLoading.module.scss';

interface DefaultSkeletonProps {
  style?: CSSProperties;
}

const DefaultSkeleton: FC<DefaultSkeletonProps> = ({
  style,
}) => {
  return (
    <div className={`${styles.skeleton} ${styles['skeleton--img']}`} style={style}>
      <SurfIcon width="30px" height="30px"/>
    </div>
  );
};

export default DefaultSkeleton;
