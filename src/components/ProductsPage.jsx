import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function ProductsPage() {

  const [products, setProducts] = useState(jsonData);

  const searchedProducts = (event) => {
    console.log(event.target.value);
    console.log(event.target.value.length);

    const userInput = event.target.value.toLowerCase();

    if(userInput.length > 0){
      const searchedProduct = products.filter((product) => {
        const lowerCaseProduct = product.name.toLowerCase();
        const userInputLength = userInput.length;
        const compareProduct =  lowerCaseProduct.slice(0, userInputLength)
        return compareProduct.includes(userInput);
      });
      
      setProducts(searchedProduct);
    }
    else{
      setProducts(jsonData);
    }
  }

  const inStockProducts = (event) => {
    if (event.target.checked){
      const inStockList = products.filter((product) => product.inStock)
      setProducts(inStockList);
    }
    else {
        setProducts(jsonData);
    }
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar inStockFeature={inStockProducts} searchFeature={searchedProducts}/>
      <ProductTable productsList={products}/>
    </div>
  );
}

