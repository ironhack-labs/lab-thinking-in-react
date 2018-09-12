import React from "react";
import Row from "./Row";

const Part = ({ list, category}) => {
  const productList = list.map(el => {
      return <Row product={el} />
  });

  return (
    <React.Fragment>
      <tr>
        <th>{category}</th>
        </tr>
        {productList}
    </React.Fragment>
  );
};

export default Part;
