import React from 'react';

const Item = ({ name, price }) => {
  return (
    <div className="item--container">
      <h2>{name}</h2>
      <h2>{price}</h2>
    </div>
  );
};

export default Item;
