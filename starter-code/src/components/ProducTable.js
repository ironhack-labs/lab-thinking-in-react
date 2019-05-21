import React from 'react';
import Row from "./Row";

const ProducTable = ({category1,category2}) => (




    <table className="striped z-depth-2">
      <thead>
      <tr>

        <th>Name</th>

        <th>Item Price</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td> <h5>Catergoria 1</h5>
        </td>
      </tr>

        {
          category1.map((el,i) =>
              <Row
                name={el.name}
                price={el.price}
                avaible={el.stocked}
                key={i}
              />
          )
        }
      <tr>
          <td> <h5>Catergoria 2</h5>
        </td>
      </tr>
        {
          category2.map((el,i) =>


              <Row
                name={el.name}
                price={el.price}
                avaible={el.stocked}
                key={i}
              />

          )
        }

      </tbody>
    </table>

);

export default ProducTable; 