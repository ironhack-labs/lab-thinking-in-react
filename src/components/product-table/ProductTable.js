import ProductRow from '../product-row/ProductRow';
import products from '../../data.json'
import { useState, useEffect } from 'react'


function ProductTable({ search, checkInStock }) {

const [ showItems, setShowItems ] = useState([]) 

useEffect(() => {
  const  timeout = setTimeout(() => {
    setShowItems(products)
  }, 3000)

  return () => {
    clearTimeout(timeout)
  }
})


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
        {showItems
          .filter((p) => p.name.includes(search)) 
          .filter((p) => checkInStock ? p.inStock : true ) 
          .map((product) => (
          <ProductRow key={product.id} {...product}  />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
