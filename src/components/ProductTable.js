import ProductRow from './ProductRow';
const ProductTable = ({products}) => {
   
    return(
        <>
        <table>
            <thead>
              <tr>
               <th>Name</th>
               <th>Price</th>
              </tr>
            </thead>
            
            {products.map((product) => {
          const { price, inStock, name, id } = product;
          return (
            <ProductRow key={id} name={name} price={price} inStock={inStock} />
          );
        })}
            

        </table>
      </>
    )

}
export default ProductTable;