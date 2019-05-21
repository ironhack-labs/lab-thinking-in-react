import React from "react";
import ProductRow from "./ProductRow";

export default function ProductTable(props) {
  return (
    <div className=" uk-margin-remove-top uk-align-center uk-width-xxlarge">
      <table className="uk-table uk-section-muted uk-margin-remove">
        <thead>
          <tr>
            <th className="uk-text-center">NAME</th>
            <th className="uk-text-center">PRICE</th>
          </tr>
        </thead>
      </table>
      {!props.checked &&
        props.product
          .filter(product => product.name.toLowerCase().includes(props.search))
          .map(product => <ProductRow product={product} />)}
      {props.checked &&
        props.product
          .filter(
            product =>
              product.stocked &&
              product.name.toLowerCase().includes(props.search)
          )
          .map(product => <ProductRow product={product} />)}
    </div>
  );
}
