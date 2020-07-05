import React from 'react';

function Row() {

        const {name, price, stocked} = this.props.rwoP

        return (
        <tr>
            <td style={{color: stocked ? 'black' : 'red'}}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

    

    export default Row;