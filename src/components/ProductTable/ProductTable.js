import React from 'react';
import './ProductTable.css';
import ProductRow from '../ProductRow/ProductRow'

function ProductTable(props) {
    //console.log("producttable props", props)
    let products = props.products;
    //console.log("products", products)
    return (
        <div className="productTable">
            <h2>Product Table</h2>
            <ProductRow products={products}/>
        </div>
    )
}

export default ProductTable;

// function ProductTable(props) {
//     console.log("producttable props", props)
//     let products = props.products;
//     console.log("products", products)
//     return (
//         <div className="productTable">
//             <h2>Product Table</h2>
//             {
//                 props.products.map((item)=>{
//                     return (
//                         <div className="productTableList">
//                             <ProductRow 
//                                 key={item.id}
//                                 {...item}
//                             />
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }