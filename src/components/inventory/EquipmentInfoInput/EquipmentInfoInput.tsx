import { useTextWidth } from '@tag0/use-text-width';
import styles from './EquipmentInfoInput.module.scss';
import UploadIcon from '../../../assets/icons/upload.svg?react';
import { useEffect, useRef, useState } from 'react';

type Props = {
  name?: string;
  value?: string;
  kind?: string;
  type?: string;
  width?: number;
  height?: number;
  flexibleWidth?: boolean;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  placeholder?: boolean;
  label?: boolean;
  style?: React.CSSProperties;
};

function EquipmentInfoInput({
  name,
  value,
  label = true,
  kind = 'input',
  type = 'text',
  width,
  height,
  flexibleWidth = false,
  onChange,
  onClick,
  disabled,
  placeholder = false,
  style,
}: Props) {
  const textWidth = value
    ? useTextWidth({ text: value?.toString(), font: '14px Roboto' })
    : useTextWidth({ text: name?.toString(), font: '14px Roboto' });
  const [labelPadding, setLabelPadding] = useState<Number>(0);

  const labelRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (labelRef.current) {
      const element = labelRef.current;
      const computedStyle = window.getComputedStyle(element);
      const paddingValue = computedStyle.getPropertyValue('padding-left');
      setLabelPadding(parseInt(paddingValue));
    }
  }, []);

  return (
    <label className={styles.label}>
      {label ? name : ''}
      {kind === 'input' && (type === 'text' || type === 'button') && (
        <input
          type={type}
          value={value}
          className={styles.input}
          style={{
            width: width
              ? `${width}px`
              : `${flexibleWidth ? '100%' : `${textWidth + +labelPadding * 2 + 3}px`}`,
            height: height ? `${height}px` : '',
            ...style,
          }}
          disabled={disabled}
          placeholder={placeholder ? name : ''}
          onClick={onClick}
          onChange={onChange}
          ref={labelRef}
        />
      )}
      {kind === 'input' && type === 'file' && (
        <div className={styles.container}>
          <button
            value={value}
            className={styles.input}
            style={{
              cursor: 'pointer',
              width: `${flexibleWidth ? '100%' : `${textWidth + +labelPadding * 2 + 3}px`}`,
              ...style,
            }}
            disabled={disabled}
            onClick={onClick}
          >
            {name}
            <UploadIcon width={16} height={16} />
          </button>
          <input className={styles.inputFile} type={type} />
        </div>
      )}
      {kind === 'textarea' && (
        <textarea
          className={styles.textarea}
          disabled={disabled}
          value={value}
          placeholder={placeholder ? name : ''}
          style={{ width: `${width}px`, height: `${height}px`, ...style }}
          onChange={onChange}
        ></textarea>
      )}
    </label>
  );
}

export default EquipmentInfoInput;
