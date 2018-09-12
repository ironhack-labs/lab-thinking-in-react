import React, { Component } from "react";

import Part from "./Part";

const Table = ({ products, filter, checked }) => {


  const Sporting = products
  .filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
  .filter(el => !checked || el.stocked)
  .filter(el => el.category === "Sporting Goods")
  const Electronics = products
  .filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
  .filter(el => !checked || el.stocked)
  .filter(el => el.category === "Electronics")
  
  return (
    <table cellSpacing="0">
    <col width="50%"></col>
    <col width="50%"></col>
      <tbody>
        <tr className="tableHead">
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
