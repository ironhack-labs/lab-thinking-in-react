import React from 'react';
import Input from '../../atoms/Input';
import CheckButton from '../../atoms/CheckButton';

const SearchBar = () => {
  return (
    <div className="productTable--container">
      <Input />
      <CheckButton />
    </div>
  );
};

export default SearchBar;
