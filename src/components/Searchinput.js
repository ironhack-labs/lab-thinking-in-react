import React, {Component} from "react";

export default class Searchinput extends Component{
    render ({handleChange}=this.props){
        return(
            <header>
                <span> Buscador</span>
                <input
                placeholder="Escribe algo en el buscador "
                name="search"
                onChange={(e)=> handleChange(e)}
                />
                <div>
                    <input type="checkbox" name="isAvaiable"/>
                    <span>Esta disponible</span>
                </div>
                </header>

        )
    }
}