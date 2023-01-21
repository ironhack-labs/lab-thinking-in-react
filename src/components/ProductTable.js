import ProductRow from "./ProductRow";

function ProductTable(props) {

    const { products } = props

    return (
        <>
            <h1>Product Table</h1>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (<tr key={product.id}>
                            <ProductRow product={product} />
                        </tr>
                        )
                    })}
                </tbody>
            </table>


        </>
    )
}

export default ProductTable;