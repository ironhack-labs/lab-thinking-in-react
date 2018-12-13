import React from 'react';

const ProductCategory = ({item, data, query}) => {
    const regEx = RegExp(query.text, "i");
    let filtered 
    filtered  = data.filter(f => regEx.test(f.name))
    // if(query.checked) filtered  = data.filter(f => regEx.test(f.name) || f.stocked)
    // else filtered  = data.filter(f => regEx.test(f.name) || (f.stocked || !f.stocked))
    return(<div>
        <th>{item}</th>
        <tr>
            <td>Name</td>
            <td>Price</td>
        </tr>
        {filtered.map( (prod, index) => 
        <tr key={index}>
         <td>{item == prod.category && prod.name}</td> 
         <td>{item == prod.category && prod.price}</td> 
        </tr>)
        }
    </div>)   
}

export default ProductCategory