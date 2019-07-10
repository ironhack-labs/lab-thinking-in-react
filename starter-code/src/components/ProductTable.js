import ProductRow from "./ProductRow";

import React from "react";

export default function ProductTable(props) {
  return (
    <div>
      <div>
        <div className="ProductTableContainer">
          <table className="ProductTable">
            <thead>
              <tr>
                <th>
                  {" "}
                  <h4 className="nameTitle">Name</h4>
                </th>

                <th>
                  {" "}
                  <h4 className="priceTitle">Price</h4>
                </th>
              </tr>
            </thead>
            <ProductRow products={props.products} userinput={props.userinput} />
          </table>
        </div>
      </div>
    </div>
  );
}
