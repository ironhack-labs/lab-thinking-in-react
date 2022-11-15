import { useState, useContext } from 'react';
import jsonData from '../data.json';
import SearchBar from '../components/SearchBar';
import ProductTable from '../components/ProductTable';
import { ThemeContext } from "../context/ThemeContext";

function ProductsPage() {

  const { isDarkMode } = useContext(ThemeContext);

  const [products, setProducts] = useState(jsonData);
  const [filterText, setFilterText] = useState('');
  const [checked, setChecked] = useState(false);

  const handleStringChange = (event) => {
    console.log(event.target.value);
    setFilterText(event.target.value)
  };

  const onCheck = (isChecked) => {
    if (isChecked === true) {
      const productsInStock = jsonData.filter(
        (product) => product.inStock === true
      );
      setProducts(productsInStock);
    } else {
      setProducts(jsonData);
    }
  };

  const handleCheck = (event) => {
    setChecked(event.target.checked)
    onCheck(event.target.checked)
  }

  return (
    <div>
      <h1 style={{ color: isDarkMode ? "white" : "black" }}>IronStore 📲</h1>
      <SearchBar
        {...{ filterText, handleStringChange }}
        {...{ checked, handleCheck }}
      />
      <ProductTable
        products={products}
        filterText={filterText}
      />
    </div>
  )
}

export default ProductsPage;