import React from 'react'

export default function ProductRow({name, price, stocked}) {
    const divStyle = {
        borderBottom: '30px solid #fca311',
      };
      const oooStyle = {
        color: 'red',
        fontWeight: 'bold',
        borderBottom: '30px solid #fca311',
      };

    return (
        <div className="columns is-centered">
            <div className="column is-one-quarter" style={stocked? divStyle : oooStyle}>{name}</div>
            <div className="column is-one-quarter" style={stocked? divStyle : oooStyle}>{price}</div>
        </div>
    )
}
