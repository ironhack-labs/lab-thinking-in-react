import React, { Component } from "react";

const DataBox = props => {
  const mappedList = props.myItems.map((el, index) => (
    <tr key={index+el.category} className={el.stocked ===false && "soldOut"}>
      <td>{el.name}</td>
      <td>{el.price}</td>
      <td>{el.stocked ? "" : "outOfStock"}</td>
    </tr>
  ));
  return (
    <React.Fragment>{mappedList}</React.Fragment>
  );
};

export default DataBox;
