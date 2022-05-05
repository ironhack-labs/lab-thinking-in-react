import ProductRow from "../product-row/ProductRow"


function ProductTable({ products }) {
    return (
        <><table>
            <tbody>
                {products.map(data => {
                    console.log(data)
                    return (
                        <ProductRow key={data.id} product={data} />
                    )
                })}</tbody>
        </table>
            <h1>dfsgf</h1>

        </>
    )
}

export default ProductTable