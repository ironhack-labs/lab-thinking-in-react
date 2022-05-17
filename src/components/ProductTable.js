import ProductRow from './ProductRow.js';

function ProductTable(props) {
    return (
        <div className='ProductTable'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products
                    .filter(product => {
                        return product.name.toLowerCase().includes(props.search.toLowerCase());
                    })
                    .filter(product => {
                        if (props.showOnlyInStock) {
                            return product.inStock;
                        }
                        return true;
                    })
                    .map(product => (
                        <ProductRow key={product.id} product={product}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;