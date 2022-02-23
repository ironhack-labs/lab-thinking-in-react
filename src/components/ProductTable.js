//ProducTable.js


import ProductRow from './ProductRow';

function ProductTable({productsList}) {
    
    return (
        <div className='ProductsTable'>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            {productsList.map(product => {
                    return (
                        <ProductRow 
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            instock={product.inStock}
                        />                         
                    ) 
                })}    
            </table>        
        </div>
    );
}

export default ProductTable;