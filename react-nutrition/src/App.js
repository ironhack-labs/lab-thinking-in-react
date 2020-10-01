import React, { Component, Fragment } from 'react';
import './App.css';
import data from './components/data.json'
import FilterIterableProductTable from './components/FilterableProductTable'


class App extends Component {

    constructor() {
        super()
        this.state = {
            data: data
        }
    }


    render() {
        return (
            <Fragment>
                <div className="App">
                    <FilterIterableProductTable {...this.state.data} />
                </div>
            </Fragment>
        );
    }
}

export default App;
