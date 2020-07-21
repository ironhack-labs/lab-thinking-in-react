import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {

    //props: products

    const renderProducts = props.products
        .filter(prod => prod.name.toLowerCase().includes(props.filterValue.name))
        .filter(prod => props.filterValue.onStock ? prod.stocked : prod )
        .map( prod => <ProductRow product={prod} key={prod.name}/>)


    return (
        <div>
            <h1>ProductTable</h1>
            <div>
                <div className="table-info">
                    <h4>Name</h4>
                    <h4>Price</h4>
                </div>
                <div className="table-data">
                    {renderProducts}
                </div>
            </div>
        </div>
    )
}