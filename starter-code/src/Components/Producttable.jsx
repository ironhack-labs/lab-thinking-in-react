import React, { Component } from 'react'
import Productrow from './Productrow'
import { data } from '../data.json'

export default class Producttable extends Component {

    constructor(props){
        super()

        this.state={
            products:data   
        }
    }



    render() {
        
        let resultSearch = this.state.products.filter(el => el.name.toLowerCase().includes(this.props.filterProducts.toLowerCase()))
        

        let noStocked = resultSearch.filter(el => el.stocked)
        

        return (
            <div className="productContainer">
                <div className="head row">
                    <div className="column">Name</div>
                    <div className="column">Price</div>
                </div>
                
                {this.props.onStock === true &&(
                    noStocked.map((product, idx) => (
                        <Productrow key={idx} {...product} />
                    ))
                )}

                {this.props.onStock === false && (
                    resultSearch.map((product, idx) => (
                        <Productrow key={idx} {...product} />
                    ))
                )}
                
            </div>
        )
    }
}
