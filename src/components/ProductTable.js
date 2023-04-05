import ProductRow from "./ProductRow";

function ProductTable({products}){
    
    return (
        <div>
            <h1>Product Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => { return <ProductRow product={product}/>} )}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;