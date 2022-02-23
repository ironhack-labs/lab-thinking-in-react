import ProductRow from "./ProductRow";

function ProductTable (props) {
    const { products } = props;

    
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>In Stock</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return <ProductRow key={product.id} product={product}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default ProductTable;