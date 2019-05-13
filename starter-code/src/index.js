import React from 'react';
import ReactDOM from 'react-dom';

import { AppContext } from './context';
import FilterableProductTable from './FilterableProductTable';

import 'bulma/css/bulma.css';

ReactDOM.render(
  <AppContext>
    <FilterableProductTable />
  </AppContext>,
  document.getElementById('root')
);
