import React from 'react';

export default function ProductRow({ article }) {
    // function getColor (article) {
    //     article.stocked ? article.color = "red" : article.color = "green";
    // }

  return (
      <tr className={article.stocked ? "" : "red"} >
        <td>{article.name}</td>
        <td>{article.price}</td>
    </tr>
  );
}
