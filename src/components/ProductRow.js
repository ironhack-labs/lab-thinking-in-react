import React, {Component} from 'react';

export default ({item}) => {
  return(
    item.stocked
      ? <tr align="left">
          <td>{item.name}</td><td>{item.price}</td> 
        </tr>
      : <tr align="left" className="Non-stocked">
          <td>{item.name}</td><td>{item.price}</td> 
        </tr>
  )
}