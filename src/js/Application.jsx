import React from "react";
import foods from '../../foods.json'
import FoodBox from "./FoodBox"
import Search from "./Search"


class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todaysFoods: [],
      foodlist: [],
      search: {name: ''}
    };
    this._submitQty = this._submitQty.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this)
    this._searchFoods = this._searchFoods.bind(this)
    // this._nameSort = this._nameSort.bind(this);
    // this._popularitySort = this._popularitySort.bind(this);

  }
  componentDidMount(){
      this.setState({foodlist : foods}
      )}




  render() {
    // console.log(this.state.foodlist);
    const mappedFoods = this.state.foodlist
      .map((food, index) => (
        <FoodBox
        name={food.name}
          image={food.image}
          cals={food.calories}
          quantity={food.quantity}
          index={index}
          key={index}
          clickToSubmit={() => this._submitQty(index)}
        />
      ));

    return (
      <div>
      <h1>IronFood By Jason</h1>
      <Search
                    search={this.state.search}
                    handleSearchChange={this._handleSearchChange}
                    searchPokemon={this._searchFoods}
                />
        
    {mappedFoods}
      </div>
    )
  }
  // Functions
  // var rebels = pilots.filter(function (pilot) {
  //   return pilot.faction === "Rebels";
  // });
  
  _searchFoods(event) {
    let query = this.state.search.name
    // let regex = `/\w${query}/g`
    event.preventDefault()
    console.log("searchFoods",query )
    // let queryFoods = foods.filter(el => el.name.toLowerCase().includes(query.toLowerCase()))
    // REGEX
    let queryFoods = foods.filter((el,index)=> el.name.match(new RegExp(`.*${this.state.search.name}.*`,'i')))
    // 
    // console.log(queryFoods)
    this.setState({
      foodlist : queryFoods
    })
}

  _handleSearchChange(key, value) {
    const newSearch = { ...this.state.search }
    newSearch[key] = value
    this.setState({
        search: newSearch,
    })
}


  _submitQty = (index) => {
    console.log("updating ;",index, "of",this.state.foodlist.length)
    let qtyUpdated = this.state.foodlist;
    qtyUpdated[index].quantity = 5
    console.log(qtyUpdated[index])
    this.setState({
        foodlist: qtyUpdated
    })
  }



}

export default Application;
