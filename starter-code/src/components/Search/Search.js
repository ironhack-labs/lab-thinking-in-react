import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props){
    super(props)
    this.props=props
    this.state = {
      name:''
    }

  }
  

  render() {
    return (
      <tbody>
        <tr>
          <td>
            <input type="text"  onChange={(event)=>this.props.searchBar(event.target.value)} ></input>
          </td>
          <td>
            <input type="checkbox"></input>
          </td>
          {/* <label for="checkbox">Only Show Products in Stock</label> */}
  
        </tr>
      </tbody>
    )
  }
}



// searchInput = (event) => {
   
//   let searchArray = foods.filter(word => 
//     {
//       return word.name.toLowerCase().includes(this.state.search.toLowerCase())
//     });
//   this.setState({
//     food: searchArray,
//     search : event.target.value
// })
// }

// //La barra del render
// <div class="field">
//         <label class="label">Search</label>
//         <div class="control">
//           <input class="input" type="text" placeholder="Any food.."
//             value={this.state.search}  onChange={this.searchInput}></input>
//         </div>
//       </div>