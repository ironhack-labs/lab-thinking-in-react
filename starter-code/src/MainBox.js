import React from 'react'
import SearchBox from './SearchBox';
import ItemBox from './ItemBox';
import data from './data.json';

class MainBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchBox />
        <ItemBox dataInfo={data} />
      </React.Fragment>
    )
  }
}

export default MainBox;
