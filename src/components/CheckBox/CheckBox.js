import React from 'react';

const CheckBox = ({ handler }) => {
  return (
    <article>
      <label className="label" htmlFor="check">
        <input
          className="checkbox"
          type="checkbox"
          name="check"
          id="check"
          onChange={handler}
        />{' '}
        Only show products on stock
      </label>
    </article>
  );
};

export default CheckBox;
