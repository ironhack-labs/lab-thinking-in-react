import ProductRow from "./ProductRow";

function ProductTable (props) {
    const { products } = props;
    
    return(
        <div>
        <tr>
            <th className="tableHeaders">Name</th>
            <th className="tableHeaders">Price</th>
        </tr>
            <ProductRow products={products} />
        </div>    
    )
}

export default ProductTable