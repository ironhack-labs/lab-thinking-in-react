import React, { Component } from 'react';





class SearchBar extends Component {
    constructor() {
      super();
      this.state = {
        name : "",
        calories: "",
        image : "",
            };
    }
//   constructor() {
//     super();
//     this.state = {
//       foodList : foods,
//       todayFoods : []
//     };
//   }

//   addFood = (newFood) =>
//     {
//     const copyFood = [...this.state.foodList]
   
//     copyFood.push(newFood)
//     this.setState({
//       foodList : copyFood}
//     )
//   }

//   addToToday = (food )=>
//    { const copyFood = [...this.state.todayFoods]
//      copyFood.push(food)
//      this.setState({
//        todayFoods: copyFood
//      });
// }
  
  searchProduct = (e) => {
  let copyProducts = [...this.state.ProductsList];  
  let inputSearch = e.target.value
  
  let newCopy = copyProducts.filter((elem) => elem.name.includes(inputSearch));
      this.setState({
        ProductsList: newCopy,
      });
  }

  render() {
    return (
      <div className="SearchBar">
                <h2>Search</h2>
        <div className="SearchBar-cont">
          <input type="text" className="input" onChange={this.searchFood} />
          {/* {this.state.foodList.map((elem) => {
            return (
              <FoodBox
                key={elem.name}
                foodElement={elem}
                addToToday={this.addToToday}
              />
            );
          })} */}
        
        </div>
       
      </div>
    );
  }
}

export default SearchBar;