import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import data from '../data.json'

class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ourList: data.data
        }
    }
    render() {
        return (
            <div className="col-md-3 navBar">
                <ul>
                    {this.props.data.map((elm, idx) => {

                        return (
                            <li key={idx}><div to={`/${idx}`}>{elm.name}{elm.price}</div></li>
                        )

                    })}
                </ul>
            </div>
        );
    }
}


export default ProductTable