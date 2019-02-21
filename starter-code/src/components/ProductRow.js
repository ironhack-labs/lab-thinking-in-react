import React from "react";

export default function ProductRow({ product, search }) {
  let highlightName = product.name;

  if (search) {
    let nameArray = product.name.match(new RegExp(".{1," + search.length + "}", "g"));
    let indexOfSearch = nameArray.indexOf(search);

    nameArray.map(element => <span>{element}</span>);
    nameArray[indexOfSearch] = <span className="text-danger">{search}</span>;

    highlightName = nameArray;
  }

  return (
    <tr>
      <td className={product.stocked ? "" : "text-info"}>{highlightName}</td>
      <td>{product.price}</td>
    </tr>
  );
}
