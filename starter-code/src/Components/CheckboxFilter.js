import React from 'react';

const CheckboxFilter = (props) => {
  let handleClick = props.handleClick;

  return (
    <form >
      <div>
        <label>
          <input
            type="checkbox"
            onClick={handleClick}
          />
          Only show products on stock
        </label>
      </div>
    </form>
  );
};

export default CheckboxFilter;
