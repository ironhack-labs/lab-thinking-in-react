import React from 'react'



class Searchbar extends React.Component{

  render(){
    return (
      <div className="Searchbar">
        <h3>Search</h3>
        <input type="text" onChange={(e)=>this.props.filterProducts(e)}/>
        <div>
            <input type="checkbox" onChange={()=>this.props.onStock()} />
            <label>Only show products in stock</label>            
        </div>

      </div>
    )
  }

}

export default Searchbar