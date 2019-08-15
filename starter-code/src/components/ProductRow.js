import React, { Component } from 'react';
import data from '../data.json'

class ProductRow extends Component {
    constructor(){
        super()
         this.state = {data:  data.data };
    }
    
    render() {
            return (
             
            this.state.data.map(elm => {

            return (<div className="container">
           

            <ul>
            <li>
            <div className="row">
            <div className="col-6">{elm.name}</div><div className="col-6">{elm.price}  </div>
            </div>
          </li>

        </ul>
        </div>)
        
            }))
        }
    }

  
        
        
export default ProductRow;
