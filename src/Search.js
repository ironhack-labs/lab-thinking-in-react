import React, { Component } from 'react';
import data from './data.json';
import { useState } from 'react';

const dataSearch = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
    id: '295a4dab-74b2-4e60-b3c2-c1346aba7585',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
    id: '4522f16e-3f55-4863-ae36-e935ec9cb4ef',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
    id: '6cf41052-7869-490f-9c2c-8f8efd2a4b5d',
  },
  {
    category: 'Sporting Goods',
    price: '$199.99',
    stocked: true,
    name: 'Tennis Balls',
    id: '5358b8a4-fe62-4f7d-9a22-712be95a1f72',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
    id: '6fa4681a-61e1-4bf6-823a-24b2fe335543',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone X',
    id: 'bbdabd03-0e02-4e7d-a7fc-ce52cc1164be',
  },
  {
    category: 'Electronics',
    price: '$199.99',
    stocked: true,
    name: 'iPad Mini',
    id: 'a385a23f-07ed-4340-9ba7-937a0ce5f151',
  },
  {
    category: 'Electronics',
    price: '$199.99',
    stocked: true,
    name: 'Huawei P10',
    id: '10858000-7894-4d77-bd0f-24639d111e74',
  },
];

function renderTableHeader() {
  let header = Object.keys(dataSearch[0]);
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
}

// function renderTableData() {
//   return dataSearch
//     .filter((val) => {
//       if (searchTerm == '') {
//         return val;
//       } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
//         return val;
//       }
//     })
//     .map((data, index) => {
//       const { category, name, stocked, price, id } = data;
//       return (
//         <tr key={id}>
//           <td>{category}</td>
//           <td>{price}</td>
//           <td>{stocked}</td>
//           <td>{name}</td>
//           <td>{id}</td>
//         </tr>
//       );
//     });
// }

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {}
      <table id="data">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {dataSearch
            .filter((val) => {
              if (searchTerm == '') {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((data, index) => {
              const { category, name, stocked, price, id } = data;
              return (
                <tr key={id}>
                  <td>{category}</td>
                  <td>{price}</td>
                  <td>{stocked}</td>
                  <td>{name}</td>
                  <td>{id}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default Search;
