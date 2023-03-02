import { useEffect, useState } from "react"
import './ProductRow.css'

const ProductRow = ({ products }) => {

    const [product, setProduct] = useState(products)
    useEffect(() => {
        setProduct(products)
    }, [products])

    return (
        <>
            {
                product.map(elm => {

                    const hasStock = elm.inStock
                    let stock = ''
                    if (!hasStock) stock = 'red'

                    return (
                        <tr>
                            <td className={stock}>{elm.name}</td>
                            <td>{elm.price}</td>
                        </tr>
                    )
                })
            }

        </>
    )
}

export default ProductRow