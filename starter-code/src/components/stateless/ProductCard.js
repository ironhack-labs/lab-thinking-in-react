import React from "react";


const ProductCard = (props) => {
  return (
  <div className="productCard">
    <div className="row justify-content-around">

      <div className="col-md-3">    
        <p className={props.product.stocked ? null : "red"}>{props.product.name}</p>
      </div>
      <div className="col-md-3">    
        <p className={props.product.stocked ? null : "red"}>{props.product.price}</p>
      </div>

    </div>
  </div>
  )
};

export default ProductCard