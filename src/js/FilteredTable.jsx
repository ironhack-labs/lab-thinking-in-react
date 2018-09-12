import React from "react";
import Databox from "./DataBox"

const FilteredTable = props => {
  return (
    <div>
      <table className="steelBlueCols">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {props.cats.includes("Sporting Goods") && <tr className="category"><td>Sporting Goodies</td></tr>}
        {props.cats.includes("Sporting Goods") && <Databox myItems={props.list.filter(el => el.category === "Sporting Goods")}/>}

        {props.cats.includes("Electronics") && <tr className="category">Beeping Things</tr>}
        {props.cats.includes("Electronics") && <Databox myItems={props.list.filter(el => el.category === "Electronics")}/>}

        </tbody>
      </table>
    </div>
  );
};
export default FilteredTable;
