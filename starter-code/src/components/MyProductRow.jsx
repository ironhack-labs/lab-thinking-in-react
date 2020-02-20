import React, { Component } from 'react';
import './../styles/MyProductRow.css';
// import data from './../data.json';

export default function MyProductRow({ name, price, stocked ,style}) {
  return (
    <tbody>
      <tr>
        <td style={{ color: stocked ? 'black' : 'red' }}>{name}</td>
        <td>{price}</td>
      </tr>
    </tbody>
  );
}
