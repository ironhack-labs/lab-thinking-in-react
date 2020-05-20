import React from 'react';
import Input from '../../atoms/Input';
import CheckButton from '../../atoms/CheckButton';

const SearchBar = ({ onChange, stock }) => {
  return (
    <div className="productTable--container">
      <Input onChange={onChange} />
      <CheckButton onChange={stock} />
    </div>
  );
};

export default SearchBar;
