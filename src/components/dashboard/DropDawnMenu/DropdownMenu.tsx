import { SelectHTMLAttributes } from 'react';
import s from './DropdownMenu.module.scss';

export type DropdawnOptions = {
  label: string;
  value: string;
};
interface DropdownMenuProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: DropdawnOptions[];
  onHandleChange: (selectedOption: string) => void;
}

export const DropdownMenu = ({ options, onHandleChange, ...rest }: DropdownMenuProps) => {
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onHandleChange(event.target.value);
  };
  return (
    <select {...rest} onChange={handleDropdownChange} className={s.dropdawnMenu}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
