import React from 'react'
import ProductRow from '../productrow/ProductRow'

export default function ProductTable (props) {
    const tableRows = props.products.map(el=>{
            return (   <ProductRow key={el.id} {...el} />
                    )
    })

    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}
