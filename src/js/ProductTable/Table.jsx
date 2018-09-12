import React, { Component } from "react";

import Part from "./Part";

const Table = ({ products, filter }) => {

  const Sporting = products
  .filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
  .filter(el => el.category === "Sporting Goods")
  const Electronics = products
  .filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
  .filter(el => el.category === "Electronics")
  
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {Sporting.length !== 0 && <Part list={Sporting} category="Sporting Goods"/>}
        {Electronics.length !== 0 &&<Part list={Electronics} category="Electronics"/>}
      </tbody>
    </table>
  );
};

export default Table;
