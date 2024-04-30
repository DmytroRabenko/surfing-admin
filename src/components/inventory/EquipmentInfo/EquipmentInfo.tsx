import { QRCodeSVG } from 'qrcode.react';
import EquipmentInfoInput from 'src/components/inventory/EquipmentInfoInput';
import styles from './EquipmentInfo.module.scss';
import vars from '../../../assets/scss/vars.module.scss';
import image from '../../../assets/images/equipment-example.png';
import ArrowIcon from '../../../assets/icons/arrow-triangle.svg?react';
import { useState } from 'react';
import EyeIcon from '../../../assets/icons/eye.svg?react';
import Select from 'src/components/Select';

type Item = {
  name: string;
  description: string;
  material: string;
  type: string;
  unitMeasurement: string;
  length: number;
  width: number;
  thickness: number;
  volume: number;
  tailShape: string;
  noseShape: string;
  rails: string;
  rocker: string;
  rentedAmount: number;
  rentedTime: string;
  rank: number;
  totalRanks: number;
  qrCode: string;
};
type Props = {
  item: Item;
};

const EquipmentInfo = ({ item }: Props) => {
  const [disabled, setDisabled] = useState(true);

  const toggleEditorMode = () => {
    setDisabled(!disabled);
  };
  const selectOptions = ['first', 'second', 'third'];
  const selectStyles = {
    border: `1px solid ${vars.colorGray4}`,
    borderRadius: '12px',
    padding: '14px 17px ',
    color: vars.colorTextGray7,
    lineHeight: '1.19',
  };
  return (
    <section className={styles.card}>
      <div className={styles.card__img}>
        <img src={image} alt="Equipment image" />
        <button className={styles.allPhotoBtn}>See all photos</button>
      </div>
      <div className={styles.card__info}>
        <div className={styles.leftSide}>
          <EquipmentInfoInput
            name="Name"
            value={item.name}
            flexibleWidth={true}
            disabled={disabled}
          />
          <EquipmentInfoInput
            name="Description"
            value={item.description}
            kind="textarea"
            disabled={disabled}
            flexibleWidth={true}
            height={254}
            style={{ padding: '14px 15px' }}
          />
          <Select
            name="Material"
            options={selectOptions}
            fontSize={14}
            style={selectStyles}
            arrow={ArrowIcon}
            flexibleWidth={true}
            label="Material"
            textColor={vars.colorTextBlack2}
            disabled={disabled}
            gap={5}
          />
          <Select
            name="Type"
            options={selectOptions}
            fontSize={14}
            style={selectStyles}
            arrow={ArrowIcon}
            flexibleWidth={true}
            label="Type"
            textColor={vars.colorTextBlack2}
            disabled={disabled}
          />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.inputGroup}>
            <EquipmentInfoInput
              name="Length"
              value={`${item.length} ${item.unitMeasurement}`}
              disabled={disabled}
            />
            <EquipmentInfoInput
              name="Width"
              value={`${item.width} ${item.unitMeasurement}`}
              disabled={disabled}
            />
            <EquipmentInfoInput
              name="Thickness"
              value={`${item.thickness} ${item.unitMeasurement}`}
              disabled={disabled}
            />
          </div>
          <div className={styles.inputGroup}>
            <EquipmentInfoInput
              name="Volume"
              value={`${item.volume} ${item.unitMeasurement}`}
              disabled={disabled}
            />
            <Select
              name="Square"
              options={selectOptions}
              fontSize={14}
              style={selectStyles}
              arrow={ArrowIcon}
              flexibleWidth={true}
              label="Tail shape"
              textColor={vars.colorTextBlack2}
              disabled={disabled}
            />
            <Select
              name="Pointed"
              options={selectOptions}
              fontSize={14}
              style={selectStyles}
              arrow={ArrowIcon}
              flexibleWidth={true}
              label="Nose shape"
              textColor={vars.colorTextBlack2}
              disabled={disabled}
            />
          </div>
          <div className={styles.inputGroup}>
            <Select
              name="Rails"
              options={selectOptions}
              fontSize={14}
              style={selectStyles}
              arrow={ArrowIcon}
              flexibleWidth={true}
              label="Rails"
              textColor={vars.colorTextBlack2}
              disabled={disabled}
            />
            <Select
              name="High nose rocker"
              options={selectOptions}
              fontSize={14}
              style={selectStyles}
              arrow={ArrowIcon}
              flexibleWidth={true}
              label="Rocker"
              textColor={vars.colorTextBlack2}
              disabled={disabled}
            />
          </div>
          <div className={styles.qrCode}>
            <QRCodeSVG
              value={item.qrCode}
              width={116}
              height={116}
              style={{
                padding: '10px',
                border: `1px solid ${vars.colorGray4}`,
                borderRadius: '8px',
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <EquipmentInfoInput
              name="In current month"
              value={`${item.rentedAmount} times rented`}
              disabled={disabled}
            />
            <EquipmentInfoInput
              name="Average rent time"
              value={item.rentedTime}
              disabled={disabled}
            />
          </div>
          <div className={styles.inputGroup}>
            <EquipmentInfoInput
              name="Ranked"
              value={`${item.rank} out of ${item.totalRanks}`}
              disabled={disabled}
            />
            <div className={styles.btnGroup}>
              <EquipmentInfoInput
                onClick={toggleEditorMode}
                value={disabled ? 'Edit listing' : 'Save changes'}
                type="button"
              />
              <button type="button" className={styles.button}>
                <EyeIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentInfo;
