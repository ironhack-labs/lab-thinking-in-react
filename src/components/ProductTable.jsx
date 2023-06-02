import ProductRow from "./ProductRow"
function ProductTable(props){
    return(
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>category</th>
                    </tr> 
                </thead>

                <tbody>
                    {props.products.map((product) => <ProductRow
                        category={product.category}
                        price={product.price}
                        inStock={product.inStock}
                        name={product.name}
                        key={product.id}
                    />)}  
                </tbody>      
            </table>
        </div>
    )

}

export default ProductTable