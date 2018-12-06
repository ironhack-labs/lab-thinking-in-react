import React, { Component } from 'react';



class SearchBar extends Component {

    // searchForProduct = (event) => {
    //     this.setState({[event.target.id]: e.target.value}, ()=>{
            
    //         const fullList = [...this.state.theList];
          
    //         const newFilteredList = fullList.filter((eachFood)=>{
    //             return eachFood.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    //         })
            
    //         
    // }
    render() {
      return (
        <div >
          <input className="input" placeholder="Search" type="text"  value={this.props.query} onChange={this.props.typingText}/>
          <br></br>
           <input type="checkbox" id="myCheck"  onChange={this.props.onCheck}></input> Only show products in stock
          {/* {this.state.searchInput} onChange={(e)=> this.searchForFood(e)} */}
                
        </div>
      );
    }
  }
  
  export default SearchBar;