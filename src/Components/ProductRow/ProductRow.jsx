import { useState } from 'react'
import products from './../../data.json'
import './ProductRow.css'

const ProductRow = () => {

    const [productsArray, setProductsArray] = useState(products)


    return (
        <>
            <table className='tableProducts'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {productsArray.map(({ id, name, price, inStock }) => {
                    return (
                        <tbody key={id}>
                            <tr>
                                <td className={inStock === true ? 'noStock' : 'inStock'}>
                                    {name}
                                </td>
                                <td>
                                    {price}
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </>
    )
}

export default ProductRow