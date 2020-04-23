import React, {Component} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div>
      <form method="get" action="">
        <div className="tb">
          <div className="td">
            <input id="sb" type="text" placeholder="Search" required />{' '}
          </div>
          <div className="td" id="s-cover">
            <button type="submit">
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
        <div>
          <input type="checkbox" id="onStock" name="onStock" value="onStock" />
          <label htmlFor="onStock">Only show products on Stock</label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;


// class SearchBar extends Component {
//   state = {
//       query: '',
//       data: [],
//   }

//   handleInputChange = () => {
//       this.setState({
//           query: this.search.value
//       })
//       this.filterArray();
//   }

//   getData = () => {
//       fetch(`http://localhost:4000/restaurants`)
//       .then(response => response.json())
//       .then(responseData => {
//           // console.log(responseData)
//           this.setState({
//               data:responseData
//           })
//       })
//   }

//   filterArray = () => {
//       var searchString = this.state.query;
//       var responseData = this.state.data
//       if(searchString.length > 0){
//           // console.log(responseData[i].name);
//           responseData = responseData.filter(l => {
//               console.log( l.name.toLowerCase().match(searchString));
//           })
//       }
//   }

//   componentWillMount() {
//       this.getData();
//   }
//   render() {
//       return (
//           <div className="searchForm">
//               <form>
//                   <input type="text" id="filter" placeholder="Search for..." ref={input => this.search = input} onChange={this.handleInputChange}/>
//               </form>
//               <div>
//                   {
//                       this.state.data.map((i) =>
//                           <p>{i.name}</p>
//                       )
//                   }
//               </div>
//           </div>
//       )
//   }
// }


