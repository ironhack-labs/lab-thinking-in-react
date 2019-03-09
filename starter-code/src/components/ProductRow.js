import React from 'react';
import data from '../data.json';

export const ProductRows = ({word}) => {

    const filterData = data.data.filter(e => {
        return e.name == word;
        
    })
    

    console.log(filterData)
    return(
        <div>
            <table className="table">
                <tr>
                    <th className="row" >Name</th>
                    <th className="row" >Price</th>
                </tr>
            {data.data.map((eachData,index) =>{
                return(
                    <tr key={index}>
                        <td className="col" key={index}>{eachData.name}</td>
                        <td className="col" key={index}>{eachData.price}</td>
                    </tr>   
                );
            })}
            </table>
        </div>
    )
}

export default ProductRows;