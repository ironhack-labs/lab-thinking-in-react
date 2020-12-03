import React, { Component } from 'react'
import '../App.css';

export default class ProductRow extends Component {
    render() {
        return (
            <>
              <tr key= {this.props.idKey} 
              className= {this.props.stocked ? 'stocked' : 'stockedNo' }>
                  <td >
                    {this.props.name}
                  </td>
                  <td >
                      {this.props.price}
                  </td>
                  <td >
                      {this.props.category}
                  </td>
                  {/* <td >
                    {this.props.stocked ? 'Stocked' : 'Out-of-stock'}
                  </td> */}
              </tr>  
            </>
        )
    }
}

// render() {
//     return(
//     <tr key={this.props.idKey}>
//         <td className={this.props.stocked ? 'py-4' : 'py-4 has-text-danger'} >{this.props.name}</td>
//         <td className='py-4'>{this.props.price}</td>
//         <td className='py-4'>{this.props.cat}</td>
//     </tr>

//{this.props.price} or {this.props.goods.price} ?
// this.props.price, as its defined in ptable.js