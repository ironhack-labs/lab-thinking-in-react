import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable() {
  return (
    <div className="columns is-centered is-mobile">
      <div className="column is-10 is-offset-one">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <ProductRow />
        </table>
      </div>
    </div>
  )
}
