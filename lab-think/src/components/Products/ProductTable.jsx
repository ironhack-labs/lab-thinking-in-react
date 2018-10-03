import React, {Component} from 'react'
import ProductCategory from './ProductCategory'
import ProductRow from './ProductRow'


class ProductTable extends Component {


    render(){
        const {data, handleCategory} = this.props
        return(
            <div>
                 <div className="columns">
                    <div className="column is-3 is-offset-3">
                         Product
                    </div>
                     <div className="column is-3">
                        Price
                    </div>
                </div>
                < ProductCategory handleCategory={handleCategory}/>
                {data.map((product, key)=><ProductRow {...product} key={key}/>)}
            </div>

        )

    }
}

export default ProductTable