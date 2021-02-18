import React from 'react';

function ProductRow(props) {
    //console.log("props de product row", props)
    return (
        <div>
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })
                }
            

            </tbody>
        </table>
        </div>
    )
}

export default ProductRow;

// function ProductRow(props) {
//     console.log("props de product row", props)
//     return (
//         <div>
        
//         <table>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Price</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr key={props.id}>
//                     <td>{props.name}</td>
//                     <td>{props.price}</td>
//                 </tr>
//             </tbody>
//         </table>
//         </div>
//     )
// }