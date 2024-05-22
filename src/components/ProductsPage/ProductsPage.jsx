import { useState } from "react";
import jsonData from "./../../data.json";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [productsInStock, setproductsInStock] = useState(false);
  const handleCheckboxChange = (event) => {
    setproductsInStock(event.target.checked)
  }
  console.log(productsInStock);
  const filteredProducts = productsInStock ? products.filter(product => product.inStock) : products;

  console.log(filteredProducts);
  const handleInputChange = (event) => {
    const searchQuery = event.target.value;
    const filteredProducts = products.filter((product) => {
       return product.name.includes(searchQuery)
    })
    setProducts(filteredProducts)
  }
  
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar  onChange={handleInputChange} onCkecked={handleCheckboxChange} checked={productsInStock}/>
      <ProductTable products={filteredProducts}/>;
      
    </div>
  );
};

export default ProductsPage;
