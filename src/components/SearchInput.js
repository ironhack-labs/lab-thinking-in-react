import React, { Component } from 'react';

export default class SearchInput extends Component {
  render({handleChange}=this.props){
      return (
          <header>
              <span>Buscador</span>
              <input 
                placeholder="Busca algo"
                name="Search"
                onChange={(e)=>handleChange(e)}
              />
              <div>
                <input
                type="checkbox"
                name="isAvailable"
                /> 
                <span>Esta disponible?</span>
              </div>
          </header>
      )
  }
}

// export default class SearchInput extends Component() {
//     render({handleChange}=this.props){
//       return (
//         <div className="search-container">

//             <span>Search</span>
//             <input placeholder="Escribe aquí lo que quieras Morra" onCHange={(e)=>handleChange(e)}/>

//             <div className="stock-style">
//                 <input type="checkBox"/>
//                 <span>Si hay productos disponibles</span>
//             </div>

//         </div>
//       );
//     }
//   }