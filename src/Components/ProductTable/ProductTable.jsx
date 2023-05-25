import ProductRow from "../ProductRow/ProductRow"

const ProductTable = ({ data }) => {


    return (
        <>
            <h2>Productos</h2>
            {
                data.map(elm => {
                    return (
                        <div key={elm.id}>
                            <ProductRow {...elm} />
                        </div>
                    )
                })
            }
        </>

    )
}

export default ProductTable