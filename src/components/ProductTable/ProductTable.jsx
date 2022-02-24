import ProductRow from "../ProductRow/ProductRow";
import { useState } from 'react'

function ProductTable({ products }) {

    const [productsTable, setProductsTable] = useState(products)

    return (
        <>
            {productsTable.map(({ name, price, id }) => {
                return (

                    < ProductRow

                        name={name}
                        price={price}
                        key={id}
                    />

                )
            })
            }
        </>



    );
}

export default ProductTable;