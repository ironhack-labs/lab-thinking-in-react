import ProductRow from './ProductRow';

function ProductTable(props) {
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {props.products.filter(el => {
                    return props.searchTerm === "" && !props.checked
                                                    ? true 
                                                    : props.searchTerm === "" && props.checked
                                                    ? el.inStock
                                                    : props.searchTerm !== "" && props.checked
                                                    ? el.name.toLowerCase().includes(props.searchTerm.toLowerCase()) && el.inStock
                                                    : el.name.toLowerCase().includes(props.searchTerm.toLowerCase()) 
                })
                .map((prod) => (
                    <ProductRow product={prod} />
                ))}
            </table>
        </div>
    )
}

export default ProductTable;