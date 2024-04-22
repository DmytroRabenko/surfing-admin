import { useState, useRef } from 'react';
import { default as Chevron } from 'src/assets/icons/calendar-chevron.svg?react';
import { useClickOutside } from 'src/utils/useClickOutside';
import s from './DropdownList.module.scss';

interface DropdownListPropsData {
  name: string;
  id: number;
}
interface DropdownListProps {
  defaultText: string;
  data: DropdownListPropsData[];
  action: (id: number) => void;
}
const DropdownList = ({
  defaultText,
  data,
  action,
  children,
}: React.PropsWithChildren<DropdownListProps>) => {
  const dropdownListRef = useRef<HTMLDivElement>(null);
  const [showList, setShowList] = useState(false);
  const [buttonText, setButtonText] = useState(defaultText);
  useClickOutside(showList, dropdownListRef, () => {
    setShowList(false);
  });
  const handleClickAction = (id: number, name: string) => {
    action(id);
    setButtonText(name);
    setShowList(false);
  };

  return (
    <div className={s.dropdownList} ref={dropdownListRef}>
      <button className={s.dropdownList__trigger} onClick={() => setShowList(!showList)}>
        {children}
        {buttonText}
        <span className={`${s.chevron} ${showList ? s.active : ''}`}>
          <Chevron />
        </span>
      </button>
      {data && Array.isArray(data) && data.length > 0 && (
        <ul className={`${s.dropdownList__list} ${showList ? s.active : ''}`}>
          {data.map(item => (
            <li
              className={s.item}
              onClick={() => {
                handleClickAction(item.id, item.name);
              }}
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropdownList;
