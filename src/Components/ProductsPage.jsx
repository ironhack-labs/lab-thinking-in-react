import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import jsonData from "./../data.json"; // Importa los datos iniciales



function ProductsPage() {
  const [products] = useState(jsonData); // Estado con la lista de productos original
  const [search, setSearch] = useState(""); // Estado para el texto de búsqueda
 

  // Filtrar productos basados en el texto de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>IronStore</h1>
      {/* Pasar search y setSearch como props a SearchBar */}
      <SearchBar search={search} setSearch={setSearch} />
      {/* Pasar los productos filtrados a ProductTable */}
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
