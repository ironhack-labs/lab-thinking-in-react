import React from 'react';

export default function ProductRow(props) {
  //console.log(props.products.products.products[0].name);
  //console.log(props.products);

  //let dioni = Object.keys(props.products[0]);
  //console.log(dioni);
  //console.log(props.query);
  const dioni = props.products.filter((pro) => {
    if (props.clicked) {
      return (
        pro.name.toLowerCase().includes(props.query.toLowerCase()) &&
        pro.stocked
      );
    } else {
      return pro.name.toLowerCase().includes(props.query.toLowerCase());
    }
  });
  console.log(props.clicked);
  return (
    <table>
      {/* <h1>dioni</h1>
      {dioni.map((elem) => (
        <p>{elem}</p>
      ))} */}

      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {dioni.map((el) => (
          <tr key={Math.random()}>
            <td>{el.name}</td>
            <td>{el.price}</td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
}
