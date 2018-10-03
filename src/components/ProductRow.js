import React from "react";

const ProductRow = ({name, price, stocked}) => {
  return (
    <div className="box">
      <div className="columns">
        <div className="column">
        {stocked?
          <p>{name}</p>
          :
          <p className="has-text-danger">{name}</p>
        }
        </div>
        <div className="column">
        {stocked?
          <p>{price}</p>
          :
          <p className="has-text-danger">{price}</p>
        }
        </div>
      </div>
    </div>
  );
};

export default ProductRow;