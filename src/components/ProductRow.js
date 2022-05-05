import { useState } from "react/cjs/react.production.min";
import ProductsPage from "./ProductPage";
import ProductTable from "./ProductTable";

function ProductRow (props) {
    
    // console.log(props.products)
    // const copyProduct = [...props.products]
    const filtered = props.products.filter(product => {
        return product.name.toLowerCase().includes(props.search.toLowerCase())
    })

    return (
        <div>
            <table style={{width: 400}}>
            <thead>
                <tr style={{backgroundColor: 'lightgray'}}>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
        {filtered.map(product => (
            <tbody>
                <tr key={product.id}>
                    <td style={product.inStock? {color:'black'} : {color:'red'}}>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            </tbody>
            )
        )}
            </table>
        </div>

    )
}

export default ProductRow