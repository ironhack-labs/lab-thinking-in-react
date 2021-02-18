import React from "react";
import ProductRow from "../ProductRow/ProductRow"

function ProductTable({data, query, stockedProducts}){

    function includesName(products, query) {
        return products.name.toLowerCase().includes(query.toLowerCase())
    }
    
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.reduce((data, product) => {
                    if (includesName(product, query)) {
                        data.push(<ProductRow product={product} key={product.id}/>)
                    }
                    return data
                }, [])}
            </tbody>
        </table>
    )
}

export default ProductTable;