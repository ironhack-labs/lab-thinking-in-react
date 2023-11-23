import ProductRow from "../ProductRow/ProductRow"

function ProductTable({ products }) {

    return (
        <div>
            <ul>
                {
                    products.map(elm => {
                        return <ProductRow product={elm} />
                    })
                }
            </ul>
        </div>
    )
}

export default ProductTable