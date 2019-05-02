import React from 'react';
import Item from './Item';
import data from './data.json';

class ItemBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.dataInfo.data.map((item, idx) => {
         return (
           <Item key={idx}/>
         ) 
        })}
      </React.Fragment>
    )
  }
}

export default ItemBox;
