import React from 'react'

export default function ProductRow(props) {

    let products = props.products.filter(product =>{
        if(product.name.toLowerCase().includes(props.searchQuery.toLowerCase()))
            return true
    })

    products = products.filter(product => {
        if(props.instock){
            if(product.inStock)
                return true
        }

        else
            return true
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => {

                    return(
                    <tr key={product.id}>
                        <td style={{color:product.inStock? 'black' : 'red'}}>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}
