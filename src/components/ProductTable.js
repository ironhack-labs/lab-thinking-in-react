import ProductRow from "./ProductRow"
import ProductsPage from "./ProductsPage"

const ProductTable = (props) => {
    return ( 
        <div>
            <table className="table">
                <thead style={{backgroundColor: '#E7ECEF', height: '50px'}}>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <ProductRow products={props.products}/>
            </table>
        </div>
    )
}

export default ProductTable