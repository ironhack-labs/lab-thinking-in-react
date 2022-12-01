import ProductsRow from "../ProductsRow/ProductsRow"
import "./ProductsTable.css"


const ProductsTable = ({ products, filterText, setProducts }) => {


    const filterProducts = products.filter(elm => {
        return elm.name.toLowerCase().includes(filterText.toLowerCase())
    })

    return (
        <div>
            <div className="TableHeader">
                <p>Name</p>
                <p>Price</p>
            </div>
            <ProductsRow products={filterProducts} />
        </div>
    )
}

export default ProductsTable


