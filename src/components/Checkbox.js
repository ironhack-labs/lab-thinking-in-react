import React from 'react';
import { useState } from 'react';

const Checkbox = (props) => {
  const [checkedState, setCheckedState] = useState(false);

  const handleCheckbox = (event) => {
    let checked = event.target.checked;

    setCheckedState(checked);
    props.showItemInStock(checked);
  };

  return (
    <div className="checkbox-filter-products">
      <input
        type="checkbox"
        checked={checkedState}
        name="productsInStock"
        onChange={handleCheckbox}
      />
      <label htmlFor="productsInStock"> Show only products in stock</label>
    </div>
  );
};

export default Checkbox;
