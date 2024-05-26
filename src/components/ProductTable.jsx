import ProductRow from './ProductRow'


const ProductTable = ({ products }) => {
    return(
        <div className="ProuctTableContainer">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ProductRow key = {product.id} product = {product} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable