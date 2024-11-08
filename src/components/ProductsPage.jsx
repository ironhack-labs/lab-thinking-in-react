import { useState } from "react";

import products from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
  const [filteredProds, setFilteredProds] = useState(products);
  const [searchFields, setSearchFields] = useState({
    searchStr: "",
    prodInStock: false,
  });

  return (
    <div className="prod-page">
      <SearchBar
        products={products}
        searchFields={searchFields}
        setSearchFields={setSearchFields}
        setFilteredProds={setFilteredProds}
      />
      <ProductTable products={filteredProds} />
    </div>
  );
};

export default ProductsPage;
