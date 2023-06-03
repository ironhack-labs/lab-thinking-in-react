import ProductRow from "./ProductRow";


function ProductTable (props) {
    const { products } = props;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {products.map ((product) => {
                 return <ProductRow key={product.id} {...product}/>
                })}
                </tbody>
            </table>

        </div>
    )
}

export default ProductTable;