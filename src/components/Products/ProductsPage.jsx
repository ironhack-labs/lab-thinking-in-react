import { useState } from "react";
import jsonData from "../../data.json";
import SearchBar from "../SearchBar";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    const query = event.target.value;
    const filteredResults = jsonData.filter((f) =>
      f.name.toLowerCase().includes(query.toLowerCase())
    );
    setQuery(query);
    setProducts(filteredResults);
  };

  const handleInputChangeInStock = (event) => {
    const filteredResults = event.target.checked
      ? jsonData.filter((f) => f.inStock === true)
      : jsonData;
    setProducts(filteredResults);
  };

  return (
    <>
      <h1>IronStore</h1>
      <SearchBar query={query} handleInputChange={handleInputChange} />
      <div className="form-check d-flex justify-content-center">
        <input
          className="form-check-input"
          type="checkbox"
          style={{ marginRight: "4px" }}
          onChange={handleInputChangeInStock}
        />
        <div className="form-check-label" htmlFor="flexCheckDefault">
          Only show products in stock
        </div>
      </div>
      <ProductTable products={products} />
    </>
  );
};

export default ProductsPage;
