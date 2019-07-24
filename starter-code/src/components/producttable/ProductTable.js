import React from 'react';
import './producttable.css'
import ProductRow from '../productrow/ProductRow.js'

function ProductTable(props) {

  let showProducts = () => {
    return props.products.map((eachProduct, i)=>{
      if (props.toggleBoolean && eachProduct.stocked) {
        return <ProductRow key={i} name={eachProduct.name} price={eachProduct.price} isStocked={eachProduct.stocked} />
      } else if (!props.toggleBoolean) {
        return <ProductRow key={i} name={eachProduct.name} price={eachProduct.price} isStocked={eachProduct.stocked} />
      }
    })
  }

    return (
      <div className="Green">
      {console.log(props.products)}
        <div className="Columns">
          <h5>Name</h5>
          <h5>Price</h5>
        </div>
        {showProducts()}
      </div>
    );
}

export default ProductTable;