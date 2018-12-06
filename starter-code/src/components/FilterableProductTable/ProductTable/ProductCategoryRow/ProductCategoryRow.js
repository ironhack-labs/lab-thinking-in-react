import React, { Component } from 'react'
import Data from '../../../../data.json'

export default class ProductCategoryRow extends Component {
  constructor (){
    super();
    this.state = {
      datas: [],
    }
    // this.state.datas = this.data
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>{Data.data.map(datas => (
              <li>{datas.category}</li>
            ))}</th>
          </tr>
        </table>
      </div>
    )
  }
}
