import React from 'react';
import './App.css';

class CategoryRow extends React.Component {
  render() {
    return (
        <tr>
          <td><strong>{this.props.data.category}</strong></td>
        </tr>
    );
  }
}

export default CategoryRow;
