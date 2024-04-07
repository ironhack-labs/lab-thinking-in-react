import { useCallback, useState } from "react";
import jsonData from "./../../../data.json";
import ProductTable from "./product-table/ProductTable";
import SearchBar from "./search-bar/SearchBar";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [isChecked, setCheck] = useState(false);
  const [search, setSearch] = useState("");

  const doFilter = (searchVal, checkedVal) => {
    // Do the filtering according to the input parameters
    const searchResult = jsonData.filter((product) =>
      product.name.includes(searchVal)
    );
    const checkedResult = searchResult.filter(
      (product) => product.inStock || !checkedVal
    );
    setProducts(checkedResult);
  };

  return (
    <>
      <div className="container">
        <div className="my-4">
          <h1>IronStore</h1>
        </div>
        <SearchBar
          search={(s) => {
            /* Sets the global search state but uses the local input 
          value when calling filter to avoid async issues */
            setSearch(s);
            doFilter(s, isChecked);
          }}
          check={(c) => {
            /* Sets the global check state but uses the local input
          value when calling filter to avoid async issues */
            setCheck(c);
            doFilter(search, c);
          }}
        />
        <ProductTable products={products} />
      </div>
    </>
  );
}

export default ProductsPage;
