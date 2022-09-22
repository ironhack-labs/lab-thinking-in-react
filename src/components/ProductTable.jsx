import ProductsRow from "./ProductsRow";



const ProductTable = (props) => {


    return (
        <div >
            <div className="productTable">
                <div >
                    <p>Name</p>
                </div>
                <div >
                    <p>Price</p>
                </div>
            </div>
            <ProductsRow products={props}>
            </ProductsRow>
        </div >
    )
}

export default ProductTable;