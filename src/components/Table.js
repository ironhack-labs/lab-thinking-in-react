import React from 'react'; //No se hereda Component a menos que sea clase

export const Table = ({store}) => (
    <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        <tbody>
            {/* Aquí va otro componente */}
            {
                store.map((item,index)=>(<Content
                    key={index}
                    //opción 1: escribir todos uno por uno
                    // name={item.name}
                    // price={item.price}
                    //opción 2: mandar todo de golpe
                    {...item}
                />))
            }
        </tbody>
    </table>
);

const Content = ({name,price, stocked}) =>{
    return(
        <tr>
            <td
            style={{
                color: stocked ? "balck" : "red"
            }}
            >{name}</td>
            <td>{price}</td>
        </tr>
    )
}

// const Table = ({data}) => (
//     <section>
//         <table>
//             <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//             </tr>
//             <tbody>
//             {
//                 data.length ?
//                 data.map((item,index)=>(
//                 <Content    
//                 key={index}
//                     /* name={item.name}
//                     price={item.price} */
//                     {...item}
//                     />))
//                 :"No tengo datos aún"
//             }
//             </tbody>
//         </table>
//     </section>
// )

// const Content = (name, price, stocked) =>{
//     return(
//         <tr style={{backgroundColor: stocked ? "#fff" : "red"}}>
//             <td>{name}</td>
//             <td>{price}</td>
//         </tr>
//     )
// }
