import jsonData from "./../../data.json";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [inStock, setInStock] = useState(false);

  function handleCheck(event) {
    const test = event.target.checked;
    setInStock(test);
    if (test) {
      const inStockArr = jsonData.filter((elem) => {
        return elem.inStock;
      });
      setProducts(inStockArr);
    } else {
      setProducts(jsonData);
    }
  }
  function handleChange(event) {
    const text = event.target.value;
    if (text === "") {
      setProducts(jsonData);
    } else {
      const filteredArr = products.filter((elem) =>
        elem.name.toLowerCase().includes(text.toLowerCase())
      );
      setProducts(filteredArr);
    }
  }
  return (
    <div className="main">
      <h1>IronStore</h1>
      <SearchBar handleChange={handleChange} handleCheck={handleCheck} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
