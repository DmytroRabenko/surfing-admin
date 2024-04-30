import EquipmentInfoInput from '../EquipmentInfoInput';
import Select from 'src/components/Select';
import ArrowIcon from '../../../assets/icons/arrow-triangle.svg?react';
import styles from './AddEquipmentForm.module.scss';
import vars from '../../../assets/scss/vars.module.scss';
import ChatRoomSendButton from 'src/components/Chat/ChatRoom/ChatRoomSendButton';
import AddEquipmentPhoto from 'src/components/inventory/AddEquipmentPhoto';
import { useState } from 'react';
import CustomPopup from 'src/components/CustomPopup';
type Props = {};
// type EquipmentState = {
//   qrCode: string;
//   name: string;
//   description: string;
//   material: string;
//   category: string;
//   length: number | null;
//   width: number | null;
//   thickness: number | null;
//   volume: number | null;
//   tailShape: string;
//   noseShape: string;
//   rocker: string;
//   rails: string;
// };
const AddEquipmentForm = ({}: Props) => {
  const selectStyles = {
    border: '1px solid rgb(223,223,223)',
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

  const [textareaChar, setTextareaChar] = useState<string>('');
  const [equipmnentPhotoModalOpen, setEuipmnentPhotoModalOpen] = useState(false);
  // const [newEquipment, setNewEquipment] = useState<EquipmentState>({
  //   qrCode: '',
  //   name: '',
  //   description: '',
  //   material: '',
  //   category: '',
  //   length: null,
  //   width: null,
  //   thickness: null,
  //   volume: null,
  //   tailShape: '',
  //   noseShape: '',
  //   rocker: '',
  //   rails: '',
  // });

  const onTextareaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    if (textareaChar.length < maxTextareaLength) {
      setTextareaChar(e.target.value);
    }
    return;
  };
  const openEquipmentPhotoModal = () => {
    setEuipmnentPhotoModalOpen(true);
  };
  const closeEquipmentPhotoModal = () => {
    setEuipmnentPhotoModalOpen(false);
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
            value={textareaChar}
            placeholder={true}
            kind="textarea"
            height={260}
            onChange={onTextareaChange}
            style={inputStyles}
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
          Characters: {textareaChar.length}/{maxTextareaLength}
        </span>
        <CustomPopup
          title="Add listing here"
          open={equipmnentPhotoModalOpen}
          closeModal={closeEquipmentPhotoModal}
        >
          <AddEquipmentPhoto />
        </CustomPopup>
        <ChatRoomSendButton onClick={openEquipmentPhotoModal} />
      </footer>
    </section>
  );
};

export default AddEquipmentForm;
