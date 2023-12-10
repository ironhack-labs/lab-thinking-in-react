import {Row} from "./ProductRow";
import {PropTypes} from "prop-types"; 

export function ProductTable ({filteredProducts}) {



return (
  <div style = {{display:'flex', alignContent:'center', justifyContent:'space-around'}}>
   <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          </tr>
        </thead>

        <tbody>
   {filteredProducts.map(product => {
    return (
      <Row key= {product.id} product={product} inStock={product.inStock} />
    )

  })}
        </tbody>
      </table>
   
   
   
  </div>
);
}

ProductTable.propTypes = {
    filteredProducts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
      })
    ).isRequired,
  };