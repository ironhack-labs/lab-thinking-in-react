// import React, { Component } from 'react';

// export default class SearchBar extends Component {
//   render() {
//     return (
//       <div>
//         <h4>SearchBar</h4>
//         <input type="search"></input>
//       </div>
//     );
//   }
// }

import React from 'react';

import Form from 'react-bootstrap/Form';

export default props => (
  <Form className="mb-3">
    <Form.Group>
      <Form.Label>Search</Form.Label>
      <Form.Control
        type="text"
        value={props.query}
        onChange={event => props.performSearch(event.target.value)}
        // onChange={props.performSearch}
        placeholder="Query"
      />
    </Form.Group>
  </Form>
);
