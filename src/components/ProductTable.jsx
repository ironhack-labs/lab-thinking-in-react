import React from 'react'

const ProductTable = ({ products }) => {
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
          {products && products.map(prod => {
            return (
              <tr key={prod.id}>
                <th>{ prod.name }</th>
                <td>{ prod.price }</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default ProductTable
