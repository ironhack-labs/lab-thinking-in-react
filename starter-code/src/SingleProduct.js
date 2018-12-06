import React, {Component} from 'react';
import './App.css';



class SingleProduct extends Component{

  
        render(){
            return(
                <div className="single-product">
                <div>{this.props.productName}</div>
                <div>{this.props.productPrice}</div>
                </div>
            )

        }
}


export default SingleProduct;