
import { useState } from "react";
import jsonData from "../../data.json";
import SearchBar from "./search-bar";
import ProductTable from "./product-table";

function ProductsPage() {
  const [productsData, setProductsData] = useState(jsonData);

  // const handleSearchTask = (name) => {
  //   if (!name) {
  //     setProductsData(jsonData);
  //   } else {
  //     setProductsData(productsData.filter(product => product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())));
  //   }
  // }

  const handleSearchTask = (name) => {
    if (!name) {
      setProductsData(jsonData);
    } else {
      const filteredProducts = productsData.filter(product => 
        product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      );
      setProductsData(filteredProducts);
    }
}

const handleCheckBox = (patata) => {

  if (patata) {
    
    setProductsData(productsData.filter(product => product.inStock));
    
  } else {
   
    setProductsData(jsonData);
  }

}


  return (
    <>
      <h1>IronStore</h1>
      <SearchBar onSearch={handleSearchTask} onCheck={handleCheckBox}/>
      <ProductTable productData={productsData}/>

    </>
  );
}

export default ProductsPage;