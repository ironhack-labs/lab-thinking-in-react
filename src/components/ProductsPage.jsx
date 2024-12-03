import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const [productsSearch, setProductsSearch] =
    useState(""); /*ESTADO PARA LA BARRA DE BÚSQUEDA*/

  const searchFilter = products.filter((product) =>
    product.name.toLowerCase().includes(productsSearch.toLowerCase())
  ); /*FUNCIÓN PARA BUSCAR EN EL ARCHIVO DATA.JSON */

  const handleSearch = (event) => {
    setProductsSearch(event.target.value);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setProductSearch={setProductsSearch} />
      {/*BARRA DE BÚSQUEDA */}
      <ProductTable products={searchFilter} />{" "}
      {/*AQUÍ SE MOSTRARÁ LO QUE SE BUSQUE EN LA BARRA*/}
    </div>
  );
}

export default ProductsPage;
