import React from "react";
import Item from "./Item"

const List = ({ data }) => (
  <table className="uk-table uk-table-divider uk-table-justify">
    <thead>
      <tr>
        <th className="uk-text-primary">Name</th>
        <th className="uk-text-primary">Price</th>
      </tr>
    </thead>

    <tbody>

      {data[0] !== undefined ? (data[0].category === "Sporting Goods" ? <tr>
        <th className="uk-text-emphasis uk-text-center">Sporting Goods</th>
      </tr> : null) : null }
      

      {data.map((item, index) => item.category === "Sporting Goods" ? <Item data={item} key={index} /> : null)}

      {data[0] !== undefined ? (data[data.length - 1].category === "Electronics" ? <tr>
        <th className="uk-text-emphasis uk-text-center">Electronics</th>
      </tr> : null) :null }

      {data.map((item, index) => item.category === "Electronics" ? <Item data={item} key={index} /> : null)}

    </tbody>
  </table>
);

export default List;