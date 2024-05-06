import { useState } from 'react';

import PositionSwitcher from '../../components/inventory/PositionSwitcher';
import Select from '../../components/Select';
import Button from '../../components/inventory/Button';
import Table from '../../components/inventory/Table';
import Search from '../../components/inventory/Search';

import styles from './Inventory.module.scss';
import vars from '../../assets/scss/vars.module.scss';

import SortIcon from '../../assets/icons/sort.svg?react';
import FilterIcon from '../../assets/icons/filter.svg?react';
import PlusIcon from '../../assets/icons/plus.svg?react';
import CustomPopup from 'src/components/CustomPopup';
import AddEquipmentForm from 'src/components/inventory/AddEquipmentForm';
import AddEquipmentPhoto from 'src/components/inventory/AddEquipmentPhoto';

const sortingOptions = ['name', 'price', 'availability'];
const filterOptions = ['a', 'b', 'c', 'd', 'f', 'as', 'asd'];
const equipmentBtns = ['Surfboards', 'Wetsuits', 'Fins', 'Leashes', 'All'];

type Props = {};

const Inventory = ({}: Props) => {
  const { colorBlue, colorWhite } = vars;
  const [activeEquipBtn, setActiveEquipBtn] = useState('All');
  const [equipmnentInfoModalOpen, setEuipmnentInfoModalOpen] = useState(false);
  const [equipmnentPhotoModalOpen, setEuipmnentPhotoModalOpen] = useState(false);

  const openEuipmnentInfoModal = () => {
    setEuipmnentInfoModalOpen(true);
  };
  const closeEuipmnentInfoModal = () => {
    setEuipmnentInfoModalOpen(false);
  };
  const closeEquipmentPhotoModal = () => {
    setEuipmnentPhotoModalOpen(false);
  };
  const openEquipmentPhotoModal = () => {
    setEuipmnentPhotoModalOpen(true);
  };
  return (
    <>
      <article className={styles.inventory}>
        <header className={styles.header}>
          <Search />
          <div className={styles.options}>
            <PositionSwitcher />
            <Select
              name="Sort by"
              icon={SortIcon}
              options={sortingOptions}
              gap={15}
              textColor={vars.colorTextGray6}
            />
            <Select
              name="Filter"
              icon={FilterIcon}
              options={filterOptions}
              gap={15}
              textColor={vars.colorTextGray6}
            />
            <Button
              onClick={openEuipmnentInfoModal}
              style={{ backgroundColor: colorBlue }}
              textColor={colorWhite}
            >
              <PlusIcon width={11} height={11} />
              Add Equipment
            </Button>
          </div>
        </header>
        <div className={styles.equipmentBtns}>
          <Button style={{ padding: '7.5px', backgroundColor: 'rgb(224, 224, 224)' }}>
            <PlusIcon width={7} height={7} />
          </Button>
          {equipmentBtns.map(equipmentBtn => (
            <Button
              key={equipmentBtn}
              onClick={() => setActiveEquipBtn(equipmentBtn)}
              isSelected={activeEquipBtn === equipmentBtn}
              textColor={vars.colorTextGray6}
            >
              {equipmentBtn}
            </Button>
          ))}
        </div>
        <Table />
      </article>
      <CustomPopup
        title="Add listing here"
        open={equipmnentInfoModalOpen}
        closeModal={closeEuipmnentInfoModal}
      >
        <AddEquipmentForm
          closeModal={closeEuipmnentInfoModal}
          openEquipmentPhotoModal={openEquipmentPhotoModal}
        />
      </CustomPopup>
      <CustomPopup
        title="Add listing here"
        open={equipmnentPhotoModalOpen}
        closeModal={closeEquipmentPhotoModal}
      >
        <AddEquipmentPhoto closeModal={closeEquipmentPhotoModal}/>
      </CustomPopup>
    </>
  );
};

export default Inventory;
