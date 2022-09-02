import { useState } from "react"
import productsJson from "../../data/data.json"
import ProductTable from "../product-table/ProductTable"
import SearchBar from "../search-bar/SearchBar"

function ProductsPage() {
  const [products, setProducts] = useState(productsJson)

  const handleSearch = (product) => {
    // console.log(product)
    // setProducts(console.log(products.filter((p) => product.name.startsWith(p))))
    
  }
  
  return(
    <div>
      <h1>Iron Store</h1>
      <SearchBar data={productsJson} onSearch={() => handleSearch(products)} />
      <ProductTable products={productsJson} />
    </div>
  )
}

export default ProductsPage