import React from 'react';

function List({data =[]}){
    return(
        <div>
            {data.map( (p) => {
            if(p){
                return(
                    <div key={p.id} style={{border: "1px solid black", margin: 10, padding:10}}>
            <h4>{p.category}</h4>
            <p><span style={{color : p.stocked? "red" : "blue"}}>{p.name}</span> {p.price}</p>
            </div>
                )
            }
            return null
        })}
        </div>
    )
}
//{data.map( (p) => (
//            
//    <div key={p.id} style={{border: "1px solid black", margin: //10, padding:10}}>
//    <h4>{p.category}</h4>
//    <p><span style={{color : p.stocked? "red" : "blue"}}>{p.//name}</span> {p.price}</p>
//    </div>
//)
//    )
//    }
export default List