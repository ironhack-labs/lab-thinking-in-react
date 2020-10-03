import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    
    render() {
        return (
            <div>
                <ul className='list-group'> 
                <li className='d-flex justify-content-around py-3 '><span className='h3'>Name</span> <span className='h3'>Price</span></li>
                    {this.props.data.map(item => {
                        return (
                            <li className='list-group-item' key={item.id}><ProductRow Name={item.name} Price={item.price} Stocked={item.stocked}  /></li>
                        )
                    })}


                </ul>

            </div>
        );
    }

};

export default ProductTable;