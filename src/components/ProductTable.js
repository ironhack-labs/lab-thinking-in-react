import ProductRow from './ProductRow';
import SearchBar from './SearchBar'; 


export default function ProductTable(props) {

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr> 
                </thead>
                <tbody>
                    {props.filtered.map(product => {
                        return (      
                            <ProductRow product = {product} key = {product.id} />                             
                        );
                    })}
                </tbody>
            </table>
        </div> 
    );
} 