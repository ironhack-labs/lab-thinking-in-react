import React from "react";
import { ProductRow } from "./ProductRow";

export const Categorilist = ({ children }) => {
  return (
    <React.Fragment>
      <tr>
        <th className="category">
          <h2>{children[0].category}</h2>
        </th>
      </tr>
      <tr />
      {children.map((e, i) => (
        <ProductRow key={i}>{e}</ProductRow>
      ))}
    </React.Fragment>
  );
};
