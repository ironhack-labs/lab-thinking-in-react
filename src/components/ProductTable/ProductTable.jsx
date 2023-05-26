import './ProductTable.css'

import ProductRow from '../ProductRow/ProductRow'



const ProductTable = ({ products }) => {

    return (
        <>
            {
                products.map((products) => {

                    return (

                        <ProductRow {...products} key={products.id} />
                    )

                })
            }

        </>
    )
}

export default ProductTable