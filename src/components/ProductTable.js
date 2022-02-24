import React from 'react'
import ProductRow from './ProductRow';

function ProductTable(props) {
    // <div> cannot appear as a child of <tbody>.
    return (
        <>
            {props.products.filter((product) => {
                if (!product.name.toLowerCase().includes(props.queryProp.toLowerCase())) {
                    return false;
                }
                if (props.checkboxProp) {
                    return product.inStock;
                }

                return true;
            })
                .map((product) => {
                    return <ProductRow productData={product} key={product.id} />
                })
            }
        </>
    )
}

export default ProductTable;
