import ProductTable from "../product-table/ProductTable";
import SearchBar from "../search-bar/SearchBar";
import { useState } from "react";
import jsonData from "../../data.json";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchProduct) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <ProductTable filteredProducts={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
