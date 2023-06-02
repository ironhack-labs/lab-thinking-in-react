import ProductRow from "./ProductRow";


function ProductTable (props) {
    const { searchListResults } = props;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {searchListResults.map ((product) => (
            <ProductRow key={product.id} {...product}/>
            ))}

            </table>

        </div>
    )
}

export default ProductTable;