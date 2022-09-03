import { useEffect, useState } from "react"
import data from "../../data/data.json"
import ProductItem from "../product-item/ProductItem"

function ProductTable({ search, filterInStock }) {
  const [productsToShow, setProductsToShow] = useState([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProductsToShow(data)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  if (productsToShow.length === 0) {
    return <div className="d-flex flex-row mt-5 pt-5 justify-content-center"><h2>Loading data...</h2></div>
  }

  return(
    <div>
      <table className="table text-center mt-3">
        <thead className="bg-secondary bg-opacity-25">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productsToShow
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .filter((p) => filterInStock ? p.inStock : p)
          .map((product) => (
              <ProductItem key={product.name} {...product}/>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default ProductTable