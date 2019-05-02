import React from 'react';
import Item from './Item';

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
          this.props.dataInfo.data.map((item, idx) => {
         return (
           <tr>
            <Item key={idx} item={item}/>
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
