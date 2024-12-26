import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {

  const [searchValue, setSearchValue] = useState("");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

    const filteredProducts = jsonData.filter((eachProduct) => {
        const matchesSearch = eachProduct.name
        .toLowerCase()
        .includes(searchValue.toLowerCase())

        const matchesStock = showInStockOnly ? eachProduct.inStock : true;

        return matchesSearch && matchesStock;
    })

  return (
    <div className="general-container">
      <h1>IronStore</h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} showInStockOnly={showInStockOnly} setShowInStockOnly={setShowInStockOnly}/>
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
