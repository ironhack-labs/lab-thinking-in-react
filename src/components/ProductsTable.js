import ProductRow from "./ProductRow"

function ProductsTable (props){
    return(
     <div>

        <table className="table">
            <thead >
                <tr>
                    <th className="table-header">Name</th>
                    <th className="table-header">Price</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((oneProduct) => {
                    return (
                        <ProductRow oneProduct={oneProduct}></ProductRow>
                    )
                })}
            </tbody>
        </table>
     </div>   
    )
}

export default ProductsTable