import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


class ProductTable extends Component {


    render(){


        return(

            <div className="columns">
             
                <ProductCategoryRow />

            </div>

        )
    }


}



//<productCategoryrow />





export default ProductTable;