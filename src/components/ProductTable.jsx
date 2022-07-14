import React from 'react'


function ProductTable(props) {
    const filtered = props.productList.filter(productList => {
        if (!productList.inStock && props.checkedBox) {
            return false
        } else {
            return productList.name.toLowerCase().includes(props.queryInput.toLowerCase()) ? true : false
        }
    });



    return (
        <div>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tr>
                </tr>
            </thead>
            <tbody>
                {filtered.map(product => {
                    return (

                        <tr>
                            <td>{product.inStock ? <td style={{ color: 'black' }}>{product.name}</td> : <td style={{ color: 'red' }}>{product.name}</td>}</td>
                            <td>{product.price}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </div>
    )
}

export default ProductTable;