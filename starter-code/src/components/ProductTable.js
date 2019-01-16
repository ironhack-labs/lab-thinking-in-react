import React from "react";
import { Categorilist } from "./CategoriList";

export const ProductTable = ({ data }) => {
  let cat = [];
  data.forEach(e => {
    if (cat.indexOf(e.category) == -1) {
      cat.push(e.category);
    }
  });

  return (
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
        {cat.map((e, i) => (
          <Categorilist key={i}>
            {data.filter(list => list.category == e)}
          </Categorilist>
        ))}
      </tbody>
    </table>
  );
};
