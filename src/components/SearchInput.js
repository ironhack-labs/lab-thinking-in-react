import React, {Component} from 'react';


export default class SearchInput extends Component{
    render({handleChange}=this.props){
        return(
            <header>
                <span>Buscador</span>
                <input
                placeholder="Escribe algo para buscar"
                name="search"
                onChange={(e)=>handleChange(e)}
                />
                <div>
                    <input type="checkbox" name="Is Available"/>
                    <span>Esta disponible</span>
                </div>
            </header>

        )
    }
}

//Componente para buscar