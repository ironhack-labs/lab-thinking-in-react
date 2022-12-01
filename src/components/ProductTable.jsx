import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {

                        return (<ProductRow product={product} />)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable