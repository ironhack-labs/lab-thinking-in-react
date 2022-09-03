import { useState } from 'react'
import jsonData from '../data.json'
import ProductTable from './productTable/ProductTable'
import Searchbar from './SearchBar'

function ProductsPage() {
  const [products, setProducts] = useState(jsonData)
  const [search, setSearch] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  const handleSearch = (event) => {
    let dataSearchFilter;

    if (checkbox) {
      dataSearchFilter = jsonData.filter((product) => {
        return product.name.includes(event.target.value) && product.inStock
      })
    } else {
      dataSearchFilter = jsonData.filter((product) => {
        return product.name.includes(event.target.value)
      })
    }

    setProducts(dataSearchFilter);
    setSearch(event.target.value);
  }

  const handleInStock = (event) => {
    let dataStockFilter

    if (event.target.checked) {
      dataStockFilter = jsonData.filter((product) => {
        return product.name.includes(search) && product.inStock
      })
    } else {
      dataStockFilter = jsonData.filter((product) => {
        return product.name.includes(search)
      })
    }

    setProducts(dataStockFilter)
    setCheckbox(event.target.checked)
  }
  return (
    <div className="d-flex flex-column mb-3">
      <h1 className="text-center">IronStore</h1>
      <Searchbar
        search={search}
        handleSearch={handleSearch}
        filterInStock={checkbox}
        handleInStock={handleInStock}
      />
      <div className='d-flex justify-content-center mt-3'>
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default ProductsPage;
