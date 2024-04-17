import React from 'react';

type Props = {};

const SearchForm = (props: Props) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder="Search" />
      <button hidden type="submit" />
    </form>
  );
};

export default SearchForm;
