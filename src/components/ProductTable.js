import ProductRow from "./ProductRow";

function ProductTable({products}){
    
    return (
        <table className="table">
            <thead className="table-secondary text-muted">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => { return <ProductRow product={product}/>} )}
            </tbody>
        </table>
    )
}

export default ProductTable;