import React from 'react';
import 'bulma/css/bulma.css';

export class ProductCategoryRow extends React.Component {

   render(){
     let {category} = this.props
     return (
      <tr>
        {category}
      </tr>
     )
   }

}