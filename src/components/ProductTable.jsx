import ProductRow from "./ProductRow"

function ProductTable(props) {
    console.log(props)
    return(
        <div className="table">
            
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
               
            </tr>

            </thead>
            <tbody>
                {props.products.map((product, index) => (
                    <ProductRow key={index} product={product}></ProductRow>
                    
                      
                       
                    
                ))}
            
        </tbody>
        </table>
        </div>
    )
}

export default ProductTable