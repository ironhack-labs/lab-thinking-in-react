import { useState } from 'react';
import jsonData from '../data.json';
 import ProductRow from './ProductRow';
function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    return (

        <div>
            <h1>IronStore</h1>
            <>

                <table>
                    <tr>
                        <th>
                            <h1>Name</h1>
                        </th>
                        <th>
                            <h1>Price</h1>
                        </th>
                    </tr>
                    {products.map(elm =>
                        <tr>
                        <ProductRow prop={elm.name} />
                        <ProductRow prop={elm.price} />
                        </tr>
                    )
                    }
                </table>
            </>


        </div>
    )
}
export default ProductsPage