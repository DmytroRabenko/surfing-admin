import { CSSProperties, FC, ReactNode } from 'react';

import TextSkeleton from './element/TextSkeleton';
import ImageSkeleton from './element/ImageSkeleton';
import ListSkeleton from './element/ListSkeleton';
import DefaultSkeleton from './element/DefaultSkeleton';

type ContentType = 'text' | 'image' | 'list';

interface SkeletonLoadingProps {
  type?: ContentType;
  count?: number;
  isLoading: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

const SkeletonLoading: FC<SkeletonLoadingProps> = ({
  type,
  count = 1,
  isLoading,
  children,
  style,
}) => {
  if (isLoading) {
    switch (type) {
      case 'text':
        return <TextSkeleton />;
      case 'image':
        return <ImageSkeleton />;
      case 'list':
        return <ListSkeleton count={count} />;
      default:
        return <DefaultSkeleton style={style}/>;;
    }
  }
  return <>{ children }</>
};

export default SkeletonLoading;
