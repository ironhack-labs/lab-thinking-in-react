import ProductRow from "../ProductRow/ProductRow"

const ProductTable = ({ products }) => {

    console.log('soy los productos y he llegado', products)

    return (
        < table >
            <thead>
                <th> Name</th>
                <th> Price</th>
            </thead>
            <tbody>

                {
                    products.map((elm) => {
                        return <tr> <ProductRow name={elm.name} price={elm.price} inStock={elm.inStock} /></tr>
                    })
                }

            </tbody>
        </table >

    )
}


export default ProductTable

