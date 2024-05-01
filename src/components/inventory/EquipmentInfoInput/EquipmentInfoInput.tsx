import { useTextWidth } from '@tag0/use-text-width';
import styles from './EquipmentInfoInput.module.scss';
import UploadIcon from '../../../assets/icons/upload.svg?react';
import { useEffect, useRef, useState } from 'react';

type Props = {
  name?: string;
  defaultValue?: string | undefined;
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
  maxLength?: number | undefined;
  getValueLength?: (value: number) => void;
  style?: React.CSSProperties;
};

function EquipmentInfoInput({
  name,
  defaultValue,
  label = true,
  kind = 'input',
  type = 'text',
  width,
  height,
  flexibleWidth = false,
  onClick,
  disabled,
  placeholder = false,
  maxLength,
  getValueLength,
  style,
}: Props) {
  const textWidth = defaultValue
    ? useTextWidth({ text: defaultValue?.toString(), font: '14px Roboto' })
    : useTextWidth({ text: name?.toString(), font: '14px Roboto' });
  const [labelPadding, setLabelPadding] = useState<Number>(0);
  const [value, setValue] = useState<string>('');
  const labelRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (labelRef.current) {
      const element = labelRef.current;
      const computedStyle = window.getComputedStyle(element);
      const paddingValue = computedStyle.getPropertyValue('padding-left');
      setLabelPadding(parseInt(paddingValue));
    }
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, []);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (maxLength && inputValue.length <= maxLength) {
      setValue(e.target.value);
      if (getValueLength) getValueLength(inputValue.length);
    }
    if (!maxLength) {
      setValue(e.target.value);
    }
  };
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
          onChange={handleInputValue}
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
          onChange={handleInputValue}
        ></textarea>
      )}
    </label>
  );
}

export default EquipmentInfoInput;
