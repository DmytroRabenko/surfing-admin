import EquipmentInfoInput from '../EquipmentInfoInput';
import Select from 'src/components/Select';
import ArrowIcon from '../../../assets/icons/arrow-triangle.svg?react';
import styles from './AddEquipmentForm.module.scss';
import vars from '../../../assets/scss/vars.module.scss';
import ChatRoomSendButton from 'src/components/Chat/ChatRoom/ChatRoomSendButton';
import { useState } from 'react';

type Props = {
  closeModal: () => void;
  openEquipmentPhotoModal: () => void;
};

const AddEquipmentForm = ({ openEquipmentPhotoModal }: Props) => {
  const selectStyles = {
    border: `1px solid ${vars.colorGray4}`,
    borderRadius: '12px',
    padding: '14px 14px',
    color: vars.colorTextGray7,
  };
  const inputStyles = {
    borderRadius: '12px',
    padding: '15px',
  };
  const maxTextareaLength = 20;
  const selectOptions = ['first', 'second', 'third'];
  const [valueLength, setValueLength] = useState<number>(0);
  const getValueLength = (valueLength: number) => {
    setValueLength(valueLength);
  };
  return (
    <section className={styles.section}>
      <div className={styles.equipmentForm}>
        <div className={styles.equipmentForm__leftSide}>
          <EquipmentInfoInput
            name="Upload QR"
            label={false}
            placeholder={true}
            type="file"
            flexibleWidth={true}
            style={inputStyles}
          />
          <EquipmentInfoInput
            name="Name"
            label={false}
            placeholder={true}
            flexibleWidth={true}
            style={inputStyles}
          />
          <EquipmentInfoInput
            name="Add Descritption"
            label={false}
            placeholder={true}
            kind="textarea"
            height={260}
            style={inputStyles}
            maxLength={maxTextareaLength}
            getValueLength={getValueLength}
          />
        </div>
        <div className={styles.equipmentForm__rightSide}>
          <Select
            name="Material"
            options={selectOptions}
            fontSize={14}
            style={selectStyles}
            arrow={ArrowIcon}
            flexibleWidth={true}
          />
          <Select
            name="Select category"
            options={selectOptions}
            fontSize={14}
            style={{ ...selectStyles }}
            arrow={ArrowIcon}
            flexibleWidth={true}
          />
          <div>
            <span className={styles.size}>Size</span>
            <div className={styles.container}>
              <EquipmentInfoInput
                name="Lenght"
                label={false}
                placeholder={true}
                style={inputStyles}
              />
              <EquipmentInfoInput
                name="Width"
                label={false}
                placeholder={true}
                style={inputStyles}
              />
              <EquipmentInfoInput
                name="Thickness"
                label={false}
                placeholder={true}
                style={inputStyles}
              />
            </div>
          </div>
          <div className={styles.container}>
            <EquipmentInfoInput
              name="Volume"
              label={false}
              placeholder={true}
              style={inputStyles}
            />
            <Select
              name="Tail shape"
              options={selectOptions}
              fontSize={14}
              style={selectStyles}
              arrow={ArrowIcon}
              flexibleWidth={true}
            />
          </div>
          <Select
            name="Nose shape"
            options={selectOptions}
            fontSize={14}
            style={selectStyles}
            arrow={ArrowIcon}
            flexibleWidth={true}
          />
          <div className={styles.container}>
            <Select
              name="Rocker"
              options={selectOptions}
              fontSize={14}
              style={selectStyles}
              arrow={ArrowIcon}
              flexibleWidth={true}
            />
            <Select
              name="Rails"
              options={selectOptions}
              fontSize={14}
              style={selectStyles}
              arrow={ArrowIcon}
              flexibleWidth={true}
            />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <span>
          Characters: {valueLength}/{maxTextareaLength}
        </span>
        <ChatRoomSendButton onClick={openEquipmentPhotoModal} />
      </footer>
    </section>
  );
};

export default AddEquipmentForm;
