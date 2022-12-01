import { useState, useEffect } from 'react'
import productData from './../../../../data.json'
import './ProductRow.css'

function ProductRow() {

    const [productDataJson, setproductDataJson] = useState([])

    const [inStock, setInStock] = useState(true);

    useEffect(() => {
        setproductDataJson(productData)
    }, [])

    return (
        <div>
            <thead>
                <tr>
                    <th >Name</th>
                    <th >Price</th>
                </tr>
            </thead>
            {productDataJson.map((product) => {
                {
                    let stock
                    !product.inStock ? stock = 'red' : stock = 'green'
                }
                return (
                    <div className='product'>
                        <table>

                            <tbody>
                                <tr>
                                    <td className='stock'>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}

        </div>)
}

export default ProductRow