import ProductRow from './ProductRow';

function ProductsTable(props) {
  return (
    <>
      
      <table id="products-table">
        <tbody>
        <tr>
        <td> </td>
        <td className="table-caption">Name</td>
        <td className="table-caption">Price</td>
        </tr>
        
          {props.productInfo.map((oneProduct) => {
            if(!oneProduct.inStock){
                return <ProductRow productInfo={oneProduct} className="red" />
            }
            else {return <ProductRow productInfo={oneProduct} className=""/>};
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductsTable;
 