import React, {  Component} from 'react';
import SearchBar from './SearchBar';
import ProductRow from './ProductRow'



export class ProductTable extends Component {
    render() {

        let productsArray = this.props.product.filter((prod) => 
        prod.name.toLowerCase().inclues(this.props.searchValue.toLowerCase())
        );

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                        <ProductRow />
                    </thead> 
                    <tbody>
                        {productsArray.map((prod, index) => {
                            return <ProductRow key={index} name={prod.name} price={prod.price}/>
                        }
                        )}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default ProductTable
