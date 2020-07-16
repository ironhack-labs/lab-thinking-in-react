import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = (props) => {
    console.log("this is the  product table props", props.data.data)
    return (
        <div>
            <h1> It's time for asian food </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.data
                        .filter((product)=> {
                            return product.name.toLowerCase().includes(props.query)
                        })
                        .map(data => {
                            console.log("test test", data)
                            return (
                            <ProductRow key={data.id} product={data} query={props.query} />

                            );
                        })}
                    </tbody>
                </table>
            </div>
            </div>
    )
}

export default ProductTable;