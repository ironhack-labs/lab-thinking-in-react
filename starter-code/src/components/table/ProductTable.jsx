import React, {Component} from "react"
import "./table.css"

export default class Table extends Component{

    render(){
        
        let {data} = this.props

        return (
            <table className="uk-table uk-table-striped">
                <thead>
                    <tr>
                        <th >NAME </th>
                        <th>PRICE</th>  
                    </tr>

                </thead>
                <tbody > 
                    {
                    data.map(   ( item, index )=>  
                        /* se hizo ternario para validar el color usando si esta el stock*/
                        <tr key={index} >
                            <td className= {item.stocked ? "" : "isStock"}>    {item.name}         </td>
                            <td>    {item.price}        </td>
                        </tr> 
                               )
                 
                    }
                   
                   
                    
                </tbody>
            </table>
        )
    }



}