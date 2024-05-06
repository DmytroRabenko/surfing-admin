import { ChangeEvent } from 'react';
import PhotoIcon from '../../../../assets/icons/photo-add.svg?react';

import styles from './InputFile.module.scss';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputFile = ({ onChange }: Props) => {
  return (
    <div className={styles.input}>
      <div className={styles.placeholder}>
        <PhotoIcon width={29} height={29} />
        <span className={styles.placeholder__text}>add photo here</span>
      </div>
      <input onChange={onChange} type="file" className={styles.inputFile} />
    </div>
  );
};

export default InputFile;
