import ProductRow from "./ProductRow";

function ProductTable (props) {
    return(
        <div>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>

            {/* [ <tr key=>, <tr key=>, ... ] */}
            {props.products.map(el => {
                return <tr key={el.id}><ProductRow product={el}/></tr>
            })}
            
          
        </div>
    )
}

export default ProductTable;