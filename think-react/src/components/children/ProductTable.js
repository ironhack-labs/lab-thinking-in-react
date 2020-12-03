import ProductRow from './ProductRow'

const ProductTable = ({ products }) => {
    
    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
               </tr>
            </thead>
            <tbody>
                {products.map(elm => <ProductRow key={elm.id} product={elm} />)}
            </tbody>
        </table>
    )
}

export default ProductTable