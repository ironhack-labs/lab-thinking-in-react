import { useState } from "react";
import jsonData from "../../data.json";
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SearchBar";
import "./ProductsPage.css";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [originalProducts] = useState(jsonData);
  const [iniValue, setValue] = useState("");
  const [checkValue, setCheckValue] = useState("");

  function searchProduct(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = originalProducts.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setValue(e.target.value);
    setProducts(filteredProducts);
  }

  const displayStock = (e) => {
    const isChecked = e.target.checked;
    setCheckValue(isChecked);
    if (isChecked) {
      const filteredProducts = originalProducts.filter((item) => item.inStock);
      setProducts(filteredProducts);
    } else {
      setProducts(
        originalProducts.filter((item) =>
          item.name.toLowerCase().includes(iniValue.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="store p-4">
      <h1>IronStore</h1>
      <SearchBar
        searchProduct={searchProduct}
        iniValue={iniValue}
        displayStock={displayStock}
        checkValue={checkValue}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
