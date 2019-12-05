import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <React.Fragment>
            {this.props.hasStock ? <li className="green"><h3>{this.props.details.name}</h3><p>{this.props.details.price}</p></li> : 
             <li className="red" ><h3>{this.props.details.name}</h3><p>{this.props.details.price}</p></li>
            }
            </React.Fragment>
        )
    }
}
