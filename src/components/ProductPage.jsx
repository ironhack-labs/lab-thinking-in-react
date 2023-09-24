import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductPage() {
  const [products, setProducts] = useState(jsonData);
  const [displayProducts, setDisplayProducts] = useState(products);

  const handleSearch = (query, inStock) => {
 
    const productsCopy = products.filter((product) => {

      const lowerCaseProductName = product.name.toLowerCase();
      if (inStock) {
        return lowerCaseProductName.includes(query.toLowerCase()) && product.inStock;
      } else {
        return lowerCaseProductName.includes(query.toLowerCase());
      }
    });
    setDisplayProducts(productsCopy);
    console.log("Display", displayProducts)
  };

  //For Search -> to child component(SearchBar jsx)
//   const searchProduct = (str) => {
//     let searchResult;
//     console.log("search", { str });
//     if (str === "") {
//       searchResult = displayProducts;
//     } else {
//       searchResult = products.filter((product) => {
//         return product.name.toLowerCase().includes(str.toLowerCase());
//       });
//     }

    return (
      <div>
        <h1>IronStore </h1>
        <SearchBar key="searchbar" searchProduct={handleSearch} />
        <ProductTable products={displayProducts} />
      </div>
    );
  };

export default ProductPage;
