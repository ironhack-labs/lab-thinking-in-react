import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
      <ProductTable products={products} filter={filter} search={search} />
    </div>
  );
};
export default ProductsPage;
