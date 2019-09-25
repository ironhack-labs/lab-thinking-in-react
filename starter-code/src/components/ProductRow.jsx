import React, { Component } from 'react';
import './ProductRowCSS.css';

export default props => (
  <tr>
    <td className={(!props.products.stocked && 'red') || 'black'}>
      {props.products.name}
      />
    </td>
    <td>{props.products.price}</td>
  </tr>
);
