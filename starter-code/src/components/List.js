import React from 'react';

const List =(props)=>{
let {find} = props;
let {stocked} = props;

let color = function(i) {
    if (find[i] !== undefined && find[i].stocked == true) {return'black'} 
    else {return 'red'} 
 };

    return (
        <table className = 'tabla'>
        <tbody>
        <tr><th>Name</th><th>Price</th></tr>
            {stocked !==true ? find.map((i,index)=> <tr style={{color:color(index)}} key={index}><td>{i.name}</td><td>{i.price}</td></tr>):
            find
            .filter(function (elemento) {
                if(elemento.stocked === true) 
                {return elemento}
                }).map((i,index) => <tr key={index}><td>{i.name}</td><td>{i.price}</td></tr>)
            }
        </tbody>
        </table>
    )

}

export default List;