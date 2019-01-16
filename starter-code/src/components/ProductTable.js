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
      <tbody className="prueba">
        <tr>
          <td><h3>Name</h3></td>
          <td><h3>Price</h3></td>
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
