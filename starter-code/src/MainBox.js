import React from 'react'
import SearchBox from './SearchBox';
import ItemBox from './ItemBox';
import data from './data.json';

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      dataInfo: data.data,
    }
  }

  searchItem(queryItem) {
    this.setState({
      ...this.state,
      dataInfo: data.data.filter(item => item.name.toLowerCase().includes(queryItem.toLowerCase()))
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>IronStore</h1>
        <SearchBox searchItem={(queryItem) => this.searchItem(queryItem)}/>
        <ItemBox dataInfo={this.state.dataInfo} />
      </React.Fragment>
    )
  }
}

export default MainBox;
