import React, { Component } from "react";


export default class ListIronStoreChild extends Component {


  render() {


      if (this.props.stocked) {
          return (
              <tr className="white">
                  <td>{this.props.name}</td>
                  <td>{this.props.price}</td>
                  <td>{this.props.key2}</td>
              </tr>
          )
      } else {
          if (this.props.stock) {
              return (
                  <tr className="red">
                      <td>{this.props.name}</td>
                      <td>{this.props.price}</td>
                      <td>{this.props.key2}</td>
                  </tr>)
          } else {
              return ("")
          }
      }

  }

}