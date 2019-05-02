import React from 'react'

class Item extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td style={{color: (this.props.item.stocked === true) ? 'black' : 'red'}}>{this.props.item.name}</td>
        <td style={{color: (this.props.item.stocked === true) ? 'black' : 'red'}}>{this.props.item.price}</td>
      </React.Fragment>
    )
  }
}

export default Item;