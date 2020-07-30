// import React, { Component } from 'react';
// import ProductRow from './ProductRow';
// export class ProductTable extends Component {
//   render() {
//     //Copiar el array
//     //Filtrar el array
//     const arrFiltrado = this.props.products.data.filter((item) => {
//       return item.name.includes(this.props.filtro);
//     });

//     const productos = arrFiltrado.map((prod) => (
//       <ProductRow key={prod.name} product={prod} />
//     ));
//     return (
//       <div>
//         <table>
//           <th>
//             <td>Name</td>
//             <td>Price</td>
//           </th>
//         </table>
//         {productos}
//       </div>
//     );
//   }
// }

// export default ProductTable;
import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
  render() {
    console.log('PORPS EN PRODUC TABLE', this.props.products.data);
    const productsFiltrados = this.props.products.data.filter((element) => {
      return element.name
        .toLowerCase()
        .includes(this.props.filtro.toLowerCase());
    });

    const productTableList = productsFiltrados.map((product, i) => {
      return <ProductRow key={i} producto={product} />;
    });
    return (
      <div className="productTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{productTableList}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
