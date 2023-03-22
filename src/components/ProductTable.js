import ProductRow from './ProductRow';
import jsonData from '../data.json';

function ProductTable() {
    return(
        <div className='product-table'>
                {jsonData.map(jso => {
                    return(
                        <ProductRow key={jso.id} inStock={jso.inStock} name={jso.name} price={jso.price}/>
                    );
                })}
            </div>

    );
};

export default ProductTable;
