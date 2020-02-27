import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import FilterableProductTable from './components/FilterableProductTable';

ReactDOM.render(<FilterableProductTable />, document.getElementById('root'));
registerServiceWorker();
