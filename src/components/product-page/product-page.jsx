import { useState } from "react";
import jsonData from "./../../data.json";
import SearchBar from "../search-bar/search-bar";
import ProductsTable from "../product-table/product-table";

function ProductsPage() {
  const [allProducts] = useState(jsonData); // Mantener todos los productos originales
  const [products, setProducts] = useState(jsonData);
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (value) => {
    setSearchText(value);

    // Filtrar productos por texto de búsqueda
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filteredProducts); // Actualizar la lista de productos filtrados
  };

  return (
    <div>
      <h1>IronStore</h1>
      <p>{searchText}</p>
      <SearchBar searchText={handleSearchText} />
      <ProductsTable products={products} />
    </div>
  );
}

export default ProductsPage;
