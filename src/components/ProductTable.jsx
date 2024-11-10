import { useState, useEffect } from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filter, search }) => {
  const [productsToDisplay, setProductsToDisplay] = useState({});

  useEffect(() => {
    // Filter products based on filter and search criteria
    const filteredProducts = products.filter((e) => {
      const matchesFilter = !filter || e.inStock;
      const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    // Group products by category
    const groupedByCategory = filteredProducts.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});

    setProductsToDisplay(groupedByCategory);
  }, [products, filter, search]); // Dependencies: Update when products, filter, or search change

  return (
    <div>
      {Object.keys(productsToDisplay).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          {productsToDisplay[category].map((product) => (
            <ProductRow product={product} key={product.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
