import { useState } from "react";
import SearchBar from "../search-bar/search-bar";
import ProductTable from "../product-table/product-table";

import jsonData from "../../../data.json";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  // const handelSearch = (search) => {
  //   const filteredProducts = jsonData.filter((product) =>
  //     product.name.toLowerCase().includes(search.toLowerCase())
  //   );

  //   setProducts(filteredProducts);
  // };

  const handleSearch = (search, inStock) => {
    const filteredProducts = jsonData.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStock = !inStock || product.inStock;
      return matchesSearch && matchesStock;
    });
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductTable listProducts={products} />
    </div>
  );
}

export default ProductsPage;
