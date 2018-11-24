import React from 'react';

const ProductRow = ({item}) => (
	<tr>
        {item.stocked ? <td align="left">{item.name}</td> : <td align="left" style={{color: 'red'}}>{item.name}</td>}
		<td align="left">{item.price}</td>
	</tr>
);

export default ProductRow;
