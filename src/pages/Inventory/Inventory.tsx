import { useState } from 'react';

import PositionSwitcher from './PositionSwitcher';
import Select from '../../components/Select';
import Button from './Button';
import Table from './Table';
import Search from './Search';

import styles from './Inventory.module.scss';
import vars from '../../assets/scss/vars.module.scss';

import SortIcon from '../../assets/icons/sort.svg?react';
import FilterIcon from '../../assets/icons/filter.svg?react';
import PlusIcon from '../../assets/icons/plus.svg?react';

const sortingOptions = ['name', 'price', 'availability'];
const filterOptions = ['a', 'b', 'c', 'd', 'f', 'as', 'asd'];
const equipmentBtns = ['Surfboards', 'Wetsuits', 'Fins', 'Leashes', 'All'];

type Props = {};

function Inventory({}: Props) {
  const { colorBlue, colorWhite } = vars;
  const [activeEquipBtn, setActiveEquipBtn] = useState('All');

  return (
    <article className={styles.inventory}>
      <header className={styles.header}>
        <Search />
        <div className={styles.options}>
          <PositionSwitcher />
          <Select name="Sort by" icon={SortIcon} options={sortingOptions} />
          <Select name="Filter" icon={FilterIcon} options={filterOptions} />
          <Button style={{ backgroundColor: colorBlue }} textColor={colorWhite}>
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
          >
            {equipmentBtn}
          </Button>
        ))}
      </div>
      <Table />
    </article>
  );
}

export default Inventory;
