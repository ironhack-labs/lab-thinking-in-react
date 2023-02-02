import ProductRow from "../ProductRow/ProductRow";
import './ProductTable.css'

const ProductTable = ({products,...restProps}) => {
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {
            products.map((product,index_product) => (
            <ProductRow 
                key={index_product}
                {...product}
            />
            ))
            }
        </table>
    );
};


export default ProductTable;