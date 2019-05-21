import React from "react";
import ProductRow from "./ProductRow";

const getCategories = products => {
  return products.reduce((acc, product) => {
    if (acc.includes(product.category)) return acc;
    else {
      acc.push(product.category);
      return acc;
    }
  }, []);
};

const ProducTable = ({ products }) => {
  const categories = getCategories(products);
  return (
    <table className="uk-table uk-table-divider ">
      <thead>
        <tr>
          <th className="uk-text-center">Name</th>
          <th className="uk-text-center">Item Price</th>
        </tr>
      </thead>
      <tbody>
        {/* For each category, create a row */}
        {categories.map((category, index) => (
          // JSX tag to avoid unnecesary DOM Nodes
          <React.Fragment>
            <tr key={`cat-${index}`}>
              <td colSpan="2">
                <h5>{category}</h5>
              </td>
            </tr>
            {/* Now, retrieving products belonging to that category */}
            {products
              .filter(product => category === product.category)
              .map((productFiltered, index) => (
                <ProductRow id={index} {...productFiltered}/>
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ProducTable;
