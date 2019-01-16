import React from "react";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";
import {getDataCategories} from '../functions/getDataCategories.js'

export const ProductTable = ({ prodData }) => {
  let dataCat=getDataCategories(prodData,"category");
  return (
    <section className="section">
      <div className="container" id="ProductTable">
        <table className="table is-fullwidth is-striped is-hoverable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
           {dataCat.map(cat=>(
             <React.Fragment key={cat}>
                <ProductCategoryRow rowCat={cat} />
                <ProductRow rowCat={cat} prodData={prodData}/>
             </React.Fragment>
           ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
