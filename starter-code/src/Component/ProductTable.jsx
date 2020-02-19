import React from 'react'
import ProductRow from './ProductRow';


export default function ProductTable({products, searchInput, inStock}) {
    var filteredProducts
    if (inStock) { filteredProducts = products.filter((product,i)=>(product.name.toLowerCase().includes(searchInput.toLowerCase()) && inStock===product.stocked))};
    if (!inStock) {filteredProducts = products.filter((product,i)=>(product.name.toLowerCase().includes(searchInput.toLowerCase())))}
    return (
        <table className="table is-hoverable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {filteredProducts.map((product,i)=>(
                <tr key={i}>
                <ProductRow product={product}/>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
