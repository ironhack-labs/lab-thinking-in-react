import React from 'react'; 
import ProductRow from './ProductRow'; 


const ProductTable = props => {
    console.log("this is the product table props", props);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <ProductRow products={props.products} query={props.query} checked={props.checked}/>
            </table>
        </div>
    )
}

export default ProductTable; 