import ProductRow from "../ProductRow/ProductRow"

const ProductTable = ({ products }) => {
    return (
        <>
            <h1>Soy una tabla</h1>
            <ProductRow products={products} />
        </>
    )
}

export default ProductTable