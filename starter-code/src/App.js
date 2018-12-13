import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import ProductCategoryw from "./components/ProductCategoryw";
import ProductRow from "./components/ProductRow";

class App extends Component {
  state = {
    data: data.data
  };

  searchProduct = e => {
    const text = e.target.value;
    const regEx = RegExp(text, "i");
    const filtered = data.data.filter(d => regEx.test(d.name));

    this.setState({ data: filtered });
  };

  stockedProduct = e => {
    const text = e.target.checked;
    const regEx = RegExp(text, "i");
    const filtered = data.data.filter(d => regEx.test(d.stocked));

    text
      ? this.setState({ data: filtered })
      : this.setState({ data: data.data });
  };

  render() {
    const { data } = this.state;
 
    let last = null;
    let array = [];
    data.forEach(element => {
      if (element.category !== last) {
        array.push(<ProductCategoryw category={element.category} />);
      }
      array.push(
        <ProductRow
          name={element.name}
          price={element.price}
          stocked={element.stocked}
        />
      );
      last = element.category;
    });


// var App = React.createClass({
//   filterList: function(event){
//     var updatedList = this.state.initialItems;
//     updatedList = updatedList.filter(function(item){
//       return item.toLowerCase().search(
//         event.target.value.toLowerCase()) !== -1;
//     });
//     this.setState({items: updatedList});
//   },
//   getInitialState: function(){
//      return {
//        initialItems: [
//          "Apples",
//          "Broccoli",
//          "Chicken",
//          "Duck",
//          "Eggs",
//          "Fish",
//          "Granola",
//          "Hash Browns"
//        ],
//        items: []
//      }
    return (
      <div>
        <SearchBar
          searchProduct={this.searchProduct}
          stockedProduct={this.stockedProduct}
          {...data}
        />
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tbody>

            {array}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;




// var App = React.createClass({
//   filterList: function(event){
//     var updatedList = this.state.initialItems;
//     updatedList = updatedList.filter(function(item){
//       return item.toLowerCase().search(
//         event.target.value.toLowerCase()) !== -1;
//     });
//     this.setState({items: updatedList});
//   },
//   getInitialState: function(){
//      return {
//        initialItems: [
//          "Apples",
//          "Broccoli",
//          "Chicken",
//          "Duck",
//          "Eggs",
//          "Fish",
//          "Granola",
//          "Hash Browns"
//        ],
//        items: []
//      }
//   },
//   componentWillMount: function(){
//     this.setState({items: this.state.initialItems})
//   },
//   render: function(){
//     return (
//       <div className="filter-list">
//         <form>
//         <fieldset className="form-group">
//         <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
//         </fieldset>
//         </form>
//       <List items={this.state.items}/>
//       </div>
//     );
//   }
// });

// var List = React.createClass({
//   render: function(){
//     return (
//       <ul className="list-group">
//       {
//         this.props.items.map(function(item) {
//           return <li className="list-group-item" data-category={item} key={item}>{item}</li>
//         })
//        }
//       </ul>
//     )  
//   }
// });

// React.render(<App/>, document.getElementById('app'));

export default App;
