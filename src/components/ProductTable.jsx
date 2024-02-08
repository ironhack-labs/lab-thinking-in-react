import ProductRow from "./ProductRow";

function ProductTable(props) {
  
    return (
      <main>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.productList.map((product) => {
                        return (
                            <ProductRow key={product.id} name={product.name}  price={product.price} />
                        )
                    }) 
                }   
            </tbody>
        </table>
      </main>
    );
  }
  
  export default ProductTable;