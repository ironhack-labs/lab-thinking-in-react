import dataJSON from '../data.json';
import React, { useState} from "react";

function ProductsRow(props) {

    const { name, price, inStock, category} = props;

    const [products, setProducts] = useState(dataJSON);

    return(
        <div>
            { products.map((product)=> {
                return (
                    <tbody key={product.id} style={{ display: 'flex', border: '1px solid #C4C4C4', width: '750px', height: '40px'}}>
                        <tr>
                            <td style={{ textAlign: 'right', paddingLeft: '140px'}}>{product.name}</td>
                            <td style={{ textAlign: 'right', paddingLeft: '330px'}}>{product.price}</td>
                        </tr>
                    </tbody>
                )
            }
            )}

        </div>
    );
}

export default ProductsRow;