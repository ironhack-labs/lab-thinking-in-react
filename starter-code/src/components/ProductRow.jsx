import React from 'react';

export default function ProductRow({ article }) {
  return (
    <tr className={article.stocked ? '' : 'red'}>
      <td>{article.name}</td>
      <td>{article.price}</td>
    </tr>
  );
}
