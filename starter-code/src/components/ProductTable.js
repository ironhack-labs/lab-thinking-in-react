import React from 'react';
import ProductRow from './ProductRow';


const ProductTable = ({products}) => {

    const productList = () => products.map((product, i) => <ProductRow key={i} { ...product }/>)
    return (
      <div className="ProductTable">
        <table className="table">
          <thead className="bg-primary text-white">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {productList()}
          </tbody>
        </table>
      </div>
    )
}

export default ProductTable;

