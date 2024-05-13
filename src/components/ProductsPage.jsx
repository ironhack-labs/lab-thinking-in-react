import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  // console.log("products", products)
  const [searchWord, setSearchWord] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

// an event handler that updates searchWord state every time the user types something in the search input.
  let searchWordHandler = (e) => {
    //  console.log("lowerCase", lowerCase)
    setSearchWord(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(searchWord) && (!inStockOnly || product.inStock )
  );

  // a handler for checkbox
  const handleInStockChange = e => setInStockOnly(e.target.checked);



  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchWord={searchWord}
        searchWordHandler={searchWordHandler}
        inStockOnly = {inStockOnly}
        handleInStockChange = {handleInStockChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
