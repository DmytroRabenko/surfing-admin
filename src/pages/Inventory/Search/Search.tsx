import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import SearchIcon from '../../../assets/icons/search.svg?react';
import styles from './Search.module.scss';
type Props = {};

function Search({}: Props) {
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={styles.search} ref={searchRef}>
      <input
        style={isActive ? { width: '100%', paddingLeft: '8.5px' } : { width: 0, paddingLeft: 0 }}
        className={classNames(styles.search__input)}
        type="text"
      />
      <Button
        onClick={() => setIsActive(true)}
        style={
          {
                borderTopLeftRadius: '0',
                borderBottomLeftRadius: '0',
                paddingTop: '8.5px',
                paddingBottom: '8.5px',
              }
          
        }
      >
        <SearchIcon />
      </Button>
    </div>
  );
}

export default Search;
