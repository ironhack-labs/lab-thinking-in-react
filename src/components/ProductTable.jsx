import ProductRow from "./ProductRow";

function ProductTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tbody>
                    {props.products.map(product => {
                        return <ProductRow key={product.id} product={product} />
                    })}
                </tbody>
            </thead>    
        </table>
    );
}

export default ProductTable;