import React from 'react';
import Item from './Item';
import './ItemBox.css';

class ItemBox extends React.Component {
  render() {
    return (
      <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
          this.props.dataInfo.map((item, idx) => {
         return (
           <tr key={idx}>
            <Item item={item}/>
           </tr>
         ) 
        })
        }
        </tbody>
      </table>
      </React.Fragment>
    )
  }
}

export default ItemBox;

