import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { ProductTable } from './components/ProductTable';
import dataInfo from './data.json';

class App extends Component {

    state = {
        store: dataInfo.data
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        let newStore = dataInfo.data.filter((item, index)=>item.name.toLowerCase().includes(value.toLowerCase()));

        this.setState({store: newStore});
    }

    render() {
        return(
        <div className="App">
            <div>
                <h1>IronStore</h1>
            </div>
            <SearchBar handleChange={this.handleChange} />
            <ProductTable store={this.state.store} />
        </div>
        )
    }

}

export default App;
