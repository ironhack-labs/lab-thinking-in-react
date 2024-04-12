import { useState } from "react"
import jsonData from './../data.json'
import ProductRow from "./ProductRow"
import SearchBar from "./SearchBar"


function ProductTable() {
  const [products, setProducts] = useState(jsonData)  

  const handleSearch = (value) => {
    setProducts(products.filter((product) => product.name.includes(value)))
  }
  
  return (
    <>
    <div>
    <SearchBar onSearch={handleSearch}/>
    </div>
    <div>
      <table className="container table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
            {products.map((product) => (
              <ProductRow key={product.id} product={product}/>
            ))}

        </tbody>
      </table>
    </div>
    </>
  )
}

export default ProductTable