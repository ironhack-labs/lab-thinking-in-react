import ProductRow from "./ProductRow"

function ProductTable({ jsonData }) {
    return (
        <div>
            <ProductRow jsonData={jsonData} />
        </div>
    )
}

export default ProductTable