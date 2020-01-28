import React, { Component } from 'react'

export default class SearchBar extends Component {
   

   handleChange=(e)=>{
       this.props.onChangeInput(e.target.value)
       
   }

   changeCheckBox=()=>{
       this.props.onChangeCheckBox()
   }
  

    render() {
        return (
            <div className="searchBar">
                <label htmlFor="search">Search</label>
                {/* 
                - den Wert value={this.props.searchString} bekommen wir weil wir den state als Prop von der Componente FilteredProductTable durchreichen
                - der onChange Handler wird aufgerufen sobald etwas im Inputfeld steht. Es wird dann die funktion handlechange aufgerufen
                  und in dieser Funktion wird die Methode handleInputChange aus FilterableProductTable aufgerufen
                  weil wir diese als Prop in this.props.onChangeInput übergeben haben

                 */}
                <input type="text" name="search"  value={this.props.searchString} placeholder="Search Product ..." onChange={this.handleChange} />
                <div id="onStock">
                <input type="checkbox" name="onStock" onChange={this.changeCheckBox} />
                    <p>Only show products on stock</p>
                </div>
                
            </div>
        )
    }
}
