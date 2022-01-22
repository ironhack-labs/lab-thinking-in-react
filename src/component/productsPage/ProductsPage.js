import React from "react";
import SearchBar from "../searchBar/SearchBar";
import './ProductsPage.css';

function ProductsPage(props) {
  const {allProducts} = props;

  const [products, setProducts] = React.useState(allProducts);

  // at first is empty
  const [searchTerm, setSearchTerm] = React.useState("");

  // - - - SearchBox - - - - -   
  // From <SearchBox /> to this parent
  // triggers when the onChange event is triggered in <SearchBar/>
  // searchInput --> is the target.value from SearchBox passing from Chid -> to Parent
  const getSearchTerm = (searchInput) => setSearchTerm(searchInput);

  // filter with the 'searchTerm' typed by the user in <SearchBox />
  const searchCondition = (product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase());

  // - - - CheckBox - - - - -  
  const getCheckBoxItems = (isCheck) => {
    console.log(isCheck)
    // if is checked or true, then filter the items and show them
    let filteredProducts = products.filter((product) => product.inStock === true);
    isCheck 
      ? setProducts(filteredProducts)
      : setProducts([...allProducts])
  }

  // style
  // const outOfStockStyle = {  border: "1px solid black", backgroundColor: "red" }

  const productCardList = products.filter(searchCondition).map((product) => {
    const hasStock = product.inStock; // true or false
    console.log(hasStock)
    const outOfStock = "outOfStock" // className
    const inStock = "inStock" // className
    return (
      <div key={product.id} className={!hasStock ? outOfStock : inStock}>
        <p>Name: {product.name}</p>
        <p>Category: {product.category}</p>
        <p>Stock: {product.inStock}</p>
        <p>Price: {product.price}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchTerm={getSearchTerm} checkBoxItems={getCheckBoxItems}/>
      {productCardList}
    </div>
  );
}
//{"category": "Sporting Goods",  "price": "$9.99",     "inStock": true,    "name": "Baseball",    "id": "4522f16e-3f55-4863-ae36-e935ec9cb4ef"}
//{"category": "Sporting Goods",  "price": "$9.99",     "inStock": true,    "name": "Baseball",    "id": "4522f16e-3f55-4863-ae36-e935ec9cb4ef"}

export default ProductsPage;
