import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ShowData from './ShowData';

// {"category": "Sporting Goods",  "price": "$49.99",    "stocked": true,    "name": "Football"},

class FilterableProductTable extends Component {

  render(){
    const {data} = this.props
    console.log(data.data) //with this we can show the array that we need to manipulate
    return(
      <div>
        <h1>IronStore</h1>
        <SearchBar data={data.data} />

        <hr/>
        <ShowData data={data.data} />
      </div>

    )
  }
}

export default FilterableProductTable