import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import Table from "./Table";
import data from '../data.json'

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.data,
            filterText: '',
            stockedOnly: false
        }
    }

    /*componentWillMount() {
        this.sortSports();
        this.sortElectronics();
    }*/
    changeFilterText = (filterText) => {
        this.setState({filterText})
    };

    changeStockOnly = (stockedOnly) => {
        this.setState({stockedOnly})
    };

   render()     {
        /*console.log(this.sortElectronics)
        console.log(this.sortSports)*/
           return (
                <div>
                    <SearchBar filter={this.state.filterText} onlyStock={this.state.stockedOnly} filterTextChange={this.changeFilterText} stockOnlyChange={this.changeStockOnly}/>
                    <Table products={this.state.data} filter={this.state.filterText} onlyStock={this.state.stockedOnly}/>
                </div>
            )
        }
    };


export default FilterableProductTable;

