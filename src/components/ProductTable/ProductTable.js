import React from "react";
import ProductRow from "../ProductRow/ProductRow"

function ProductTable({data, query}){
    function includesName(data, query) {
        return data.name.toLowerCase().includes(query.toLowerCase())
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