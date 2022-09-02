import "./products-page.css";
import { useState } from "react";
import SearchBar from "../search-bar/SearchBar";
import Product from "../product/Product";
import productsData from "../../data.json";

function ProductsPage (){
  const [products, setProducts] = useState(productsData)

  const handleSearchBar = ((event) => {
    setProducts(productsData.filter( product => product.name.toLowerCase().includes(event.target.value.toLowerCase()) ))
  })

  const handleCheckBox = ((event) => {
    setProducts(productsData.filter( product => event.target.checked ? product.inStock : true ))
  })

  return(

    <div className="products-page">
      <h1 className="title text-center">IronStore</h1>
      <div className="search-bar">
        <SearchBar handleSearch = { handleSearchBar } handleChecked={ handleCheckBox } />
      </div>
      <table className="table text-center">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
            <Product {...product} key={product.id}/>)}
        </tbody>
      </table>
    </div>

  )
};

export default ProductsPage;