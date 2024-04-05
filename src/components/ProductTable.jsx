import React from 'react';
import ProductRow from './ProductRow';
import styles from './ProductsPage.module.css'

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = products
    .filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(filterText.toLowerCase());
      return inStockOnly ? nameMatch && product.inStock : nameMatch;
    })
    .map((product) => (
      <ProductRow key={product.id} product={product} />
    ));

  return (
    <table className={styles.productTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
