import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
  // console.log(props);

  return (
    <table className="table is-striped is-fullwidth">
      <tr>
        <th className="has-text-centered">Name</th>
        <th className="has-text-centered">Price</th>
      </tr>

      {!props.showProducts
        ? props.productList
            .filter(item => item.name.toLowerCase().includes(props.search.toLowerCase()))
            .map((elem, idx) => <ProductRow key={idx} product={elem} />)
        : props.productList
            .filter(item => item.name.toLowerCase().includes(props.search.toLowerCase()) && item.stocked === true)
            .map((elem, idx) => <ProductRow key={idx} product={elem} />)}
    </table>
  );
};

export default ProductTable;
