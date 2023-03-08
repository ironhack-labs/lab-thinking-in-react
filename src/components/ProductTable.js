import ProductRow from "./ProductRow";
import jsonData from '../data.json';

const products = jsonData

function ProductTable () {
    return(
        <div className='product-table'>
            <div className='table-head'>
                <span>Name</span> <span>Price</span><br></br>
            </div>
            <div>
                {products.map(product => {
                    return(
                        <ProductRow key={product.id} inStock={product.inStock} name={product.name} price={product.price}/>
                    );
                })}
            </div>
            
        </div>
    );
};

export default ProductTable;