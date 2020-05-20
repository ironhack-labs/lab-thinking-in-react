import React from 'react';

const Input = ({ onChange }) => {
  return (
    <div className="input--container">
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
