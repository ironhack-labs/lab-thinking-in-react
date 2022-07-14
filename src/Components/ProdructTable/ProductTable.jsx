import "./ProductTable.css"
import ProductRow from "./../ProductRow/ProductRow"

const ProductTable = ({ jsonData }) => {


    return (
        <div>
            <h1>ProductTable</h1>
            {jsonData.map(elm => {
                return <ProductRow product={elm} />
            })}
        </div>
    )
}

export default ProductTable