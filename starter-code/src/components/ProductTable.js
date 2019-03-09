import React from "react";
import ProductRow from "./ProductRow.js";

class ProductTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {this.props.products
              // filter => retourne un tableau qui contient uniquement les product dont le nom contient la searchQuery
              .filter(item => {
                return (
                  item.name
                    .toLowerCase()
                    .includes(this.props.search.toLowerCase()) &&
                  // vérifie si item en stock ou non et affiche la bonne liste
                  (item.stocked || !this.props.stock)
                );
              })

              .map(item => {
                return <ProductRow key={item.name} item={item} />;
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
