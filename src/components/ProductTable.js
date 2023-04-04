import ProductRow from "./ProductRow";

function ProductTable({products}){
    console.log(products)
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
                    {products.map((products) => { return <ProductRow product={products}/>} )}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;