import ProductRow from "./ProductRow"


function ProductTable(props) {
    return(
        <div className="Table">
            <table className="ProductTableHead">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody className="TableBody">
                {props.products.map(product => (
                    <ProductRow key={product.id} product={product}/>
                ))}
            </tbody>
            </table>
       
        </div>
        
    )
}




export default ProductTable