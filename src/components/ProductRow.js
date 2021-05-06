import React from 'react';

class App extends React.Component {
  render() {
    const divStyle = {
      color: this.props.product.stocked ? 'black' : 'red',
    };
    return (
      <tr className="ProductRow" style={divStyle}>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default App;
