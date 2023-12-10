import  { useState } from "react";
import jsonData from "../data.json";
import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";

export function ProductsPage() {

    
    const [products] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (term, stocked) => {
    const filtered = products.filter((item) => {
     
      const searchTerm = term
      
      const nameMatches = item.name.toLowerCase().includes(searchTerm);
      const stockedMatches = !stocked || item.inStock;
      return nameMatches && stockedMatches;
    });
    setFilteredProducts(filtered);
  };
  
    return (
      <div style={{display:'flex', flexDirection: "column", alignContent:'center', justifyContent: "center"}}>
        <SearchBar filterProducts={filterProducts}/>
  
        <ProductTable filteredProducts={filteredProducts}/>
      </div>
    );
  }
  
 