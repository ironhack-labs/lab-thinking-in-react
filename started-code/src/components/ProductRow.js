import React from 'react';
import 'bulma/css/bulma.css';

export class ProductRow extends React.Component {

  render(){
    let {category, name, price, stoked} = this.props
    return (
     <tr>
       {category}
     </tr>
    )
  }

}