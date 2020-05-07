import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import MainApp from './components/MainApp.js';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>This is the App</h1>
                <MainApp products={data} />
            </div>
        );
    }
}
