import React,{ Component } from 'react'
import ProductRow from './iterables/ProductRow'
 
class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }
 
    render() {
 
        return (
            <>
                <div className="row justify-content-center">
                    <div className="col-auto">

                        <table className="table table-responsive table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                    <tbody>
                        
                        {this.props.products.map(elm=> <ProductRow key={elm.id} product={elm} />)}
                      

                </tbody>
            </table>
                
                    </div>
                </div>
            </>
        )
    }
    }
export default ProductTable