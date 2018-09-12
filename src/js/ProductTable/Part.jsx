import React from "react";
import Row from "./Row";

const Part = ({ list, category}) => {
  const productList = list.map((el, index) => {
      return <Row product={el} key={"prod_" + index}/>
  });

  return (
    <React.Fragment>
      <tr>
        <th colSpan="2">{category}</th>
        </tr>
        {productList}
    </React.Fragment>
  );
};

export default Part;
