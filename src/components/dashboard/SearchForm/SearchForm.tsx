import React, { useState } from 'react';
import s from './SearchForm.module.scss';

interface SearchFormProps {
  onSearch: (query: string) => void;
  // TEMP SOLUTION 
  variant: '#0000' | '#ffff' | '#F3F3F3';
}
const SearchForm = ({ onSearch, variant }: SearchFormProps) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <form
      style={{ background: variant }}
      className={`${s.searchForm} ${variant}`}
      onSubmit={handleSubmit}
    >
      <input
        className={s.searchForm__input}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button hidden type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
