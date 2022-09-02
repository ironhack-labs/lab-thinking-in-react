import { useState } from 'react'
import jsonData from '../data.json'
import ProductTable from './ProductTable'
import Searchbar from './SearchBar'

function ProductsPage() {
  const [products] = useState(jsonData)
  const [handleProducts, setHandleProducts] = useState(jsonData)
  const [search, setSearch] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  const handleSearch = (event) => {
    let dataProductsFilter;

    if (checkbox) {
      dataProductsFilter = products.filter((product) => {
        return (
          product.name
            .includes(event.currentTarget.value) &&
          product.inStock
        );
      });
    } else {
      dataProductsFilter = products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(event.currentTarget.value.toLowerCase())
      });
    }

    setHandleProducts(dataProductsFilter);
    setSearch(event.currentTarget.value);
  }

  const handleInStock = (event) => {
    let newFilteredProductsArray

    if (event.currentTarget.checked) {
      newFilteredProductsArray = products.filter((product) => {
        return (
          product.name.toLowerCase().includes(search.toLowerCase()) &&
          product.inStock
        );
      });
    } else {
      newFilteredProductsArray = products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(search.toLowerCase());
      });
    }

    setHandleProducts(newFilteredProductsArray)
    setCheckbox(event.currentTarget.checked)
  }
  return (
    <div className="d-flex flex-column mb-3">
      <h1 className="align-self-center">IronStore</h1>
      <Searchbar
        search={search}
        handleSearch={handleSearch}
        filterInStock={checkbox}
        handleInStock={handleInStock}
      />
      <ProductTable products={handleProducts} />
    </div>
  );
}

export default ProductsPage;
