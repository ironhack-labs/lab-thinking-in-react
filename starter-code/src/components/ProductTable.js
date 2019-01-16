import React from "react";
import { Categorilist } from "./CategoriList";
import { ProductRow } from "./ProductRow";

export const ProductTable = ({ data }) => {
  let cat = [];
  data.forEach(e => {
    if (cat.indexOf(e.category) == -1) {
      cat.push(e.category);
    }
  });

  return (
    <table>
      <tbody className="prueba">
        <ProductRow>
          {{ name: "Name", price: "Price", stocked: true }}
        </ProductRow>
        {cat.map((e, i) => (
          <Categorilist key={i}>
            {data.filter(list => list.category == e)}
          </Categorilist>
        ))}
      </tbody>
    </table>
  );
};
