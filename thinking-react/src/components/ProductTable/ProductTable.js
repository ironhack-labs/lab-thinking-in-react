import ProductRow from './../ProductRow/ProductRow'

const ProductTable = props => {

    return (

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                {props.products.map(elm => <ProductRow key={elm.id} name={elm.name} price={ elm.price} />)}
            </tbody>
        </table>

    )
}

export default ProductTable