import React from 'react';

const CategoryRow = ({children}) => (
  <tr>
    <th className="category" colSpan="2">
      {children}
    </th>
  </tr>
);

export default CategoryRow;