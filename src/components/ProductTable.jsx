import "../App.css";
import ProductRow from "../components/ProductRow"
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import jsonData from "../data.json";
function ProductTable() {

    const [products, setProducts] = useState(jsonData);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showOnlyInStock, setShowOnlyInStock] = useState(false);
  
    const handleSearch = (search) => {
      console.log("Search:", search);
      const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
      );
      console.log("Filtered products:", filteredProducts);
      setFilteredProducts(filteredProducts);
    }

    const handleStockFilter = (isChecked) => {
        setShowOnlyInStock(isChecked);
        if (isChecked) {
            const inStockProducts = products.filter((product) => product.inStock);
            setFilteredProducts(inStockProducts);
        } else {
            setFilteredProducts(products);
        }
      };
    
 

    return (
      <div className="table-container">
        <SearchBar onSearch={handleSearch} onStockFilter={handleStockFilter}  />
        <ProductRow products={filteredProducts}/>  

      </div>
    );
  }
  
  export default ProductTable;    