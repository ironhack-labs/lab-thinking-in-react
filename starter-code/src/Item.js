import React from 'react'

class Item extends React.Component {
  constructor(props){
    super(props);
    this.itemStyle = {
      color: this.props.item.stocked ? 'black' : 'red'
    }
  }
  

  render() {
    return (
      <React.Fragment>
        <td style={this.itemStyle}>{this.props.item.name}</td>
        <td style={this.itemStyle}>{this.props.item.price}</td>
      </React.Fragment>
    )
  }
}

export default Item;