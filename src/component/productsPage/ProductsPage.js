import React from "react";
import SearchBar from "../searchBar/SearchBar";
import ProductCard from "../productCard/ProductCard";

function ProductsPage(props) {
  console.log(props.products);
  const [products, setProducts] = React.useState(props.products);

  const productCardList = products.map((product) => {
    // conditional styling, if a product is out of stock
    let styling;
    !product.inStock
      && (styling = { border: "1px solid black", backgroundColor: "red" })
    return (
      <div key={product.id} style={styling}>
        <p>Name: {product.name}</p>
        <p>Category: {product.category}</p>
        {/* { !product.inStock 

        } */}
        <p>Stock: {product.inStock}</p>
        <p>Price: {product.price}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      {productCardList}
    </div>
  );
}
//{"category": "Sporting Goods",  "price": "$9.99",     "inStock": true,    "name": "Baseball",    "id": "4522f16e-3f55-4863-ae36-e935ec9cb4ef"}
//{"category": "Sporting Goods",  "price": "$9.99",     "inStock": true,    "name": "Baseball",    "id": "4522f16e-3f55-4863-ae36-e935ec9cb4ef"}

export default ProductsPage;
