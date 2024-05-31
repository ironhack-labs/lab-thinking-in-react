import ProductRow from "./ProductRow"


function ProductTable ({products}){
return(
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
            {products.map((product) => (
            <ProductRow key={product.id} product={product}></ProductRow> 
            ))}
        </tbody>
    </table>
)
}

export default ProductTable