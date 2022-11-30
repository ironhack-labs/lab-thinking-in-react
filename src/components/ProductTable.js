import ProductRow from './ProductRow';

function ProductTable(props) {
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {props.products.filter(el => props.searchTerm === "" ? true : el.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
                .map((prod) => (
                    <ProductRow product={prod} />
                ))}
            </table>
        </div>
    )
}

export default ProductTable;