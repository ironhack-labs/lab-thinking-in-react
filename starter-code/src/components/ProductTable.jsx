import React from "react";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, inputValue, checkbox }) {
  // console.log(products);

  const isStocked = element => {
    let color = "";
    element.stocked === false ? (color = "red") : (color = "black");
    return color;
  };

  // const check = element => {
  //   console.log(element);

  // const superFonction = arr => {
  //   return arr.filter(oneElement => {
  //     if (checkbox) {
  //       if (oneElement.stocked) {
  //         return oneElement.name
  //           .toLowerCase()
  //           .includes(inputValue.toLowerCase());
  //       }
  //     } else {
  //       return oneElement.name.toLowerCase().includes(inputValue.toLowerCase());
  //     }
  //   });
  // };

  const superFonction = arr => {
    return arr.filter(oneElement => {
      if (!checkbox) {
        return oneElement.name.toLowerCase().includes(inputValue.toLowerCase());
      } else if (oneElement.stocked) {
        return oneElement.name.toLowerCase().includes(inputValue.toLowerCase());
      }
      return null;
    });
  };

  // const filtered = arr => {
  //   return arr.filter(oneElement => {
  //     return oneElement.name.toLowerCase().includes(inputValue.toLowerCase());
  //   });
  // };

  // const isChecked = arr => {
  //   return arr.filter(oneElement => {
  //     if (checkbox) {
  //       return oneElement.stocked;
  //     } else {
  //       return oneElement;
  //     }
  //   });
  // };

  return (
    <React.Fragment>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {superFonction(products).map((oneProduct, i) => {
          return (
            <ProductRow
              color={isStocked(oneProduct)}
              name={oneProduct.name}
              price={oneProduct.price}
              key={oneProduct.name}
            />
          );
        })}
      </tbody>
    </React.Fragment>
  );
}
