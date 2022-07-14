import ProductsPage from "../ProductsPage/ProductsPage";
import { useEffect, useState } from 'react';
import ProductRow from "../ProductRow/ProductRow";


function ProductTable({ products, filterProduct }) {
    const [ProductTable, setProductTable] = useState(products)
    useEffect(() => {
        setProductTable(products)
    }, [products])

    return (
        <>
            <h3>Table</h3>
            {
                ProductTable.map(({ name, price, inStock, id }) => {
                    return (
                        <table key={id}>
                            <tbody>
                                <ProductRow name={name} price={price} inStock={inStock} />
                            </tbody>
                        </table>
                    )
                })
            }

        </>
    )
}

export default ProductTable