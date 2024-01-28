
import ProductRow from './ProductRow';

function ProductTable({productsData, searchItem}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {productsData.filter((everyProduct) => {
                    return everyProduct.name.toLowerCase().includes(searchItem)
                })
                .map((eachProduct) => {
                    return <ProductRow eachProduct={eachProduct} 
                    key={eachProduct.id}/>
                })}

            </tbody>
            
        </table>
    );
};

export default ProductTable;