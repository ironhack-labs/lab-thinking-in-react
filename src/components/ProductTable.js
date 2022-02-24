import ProductRow from './ProductRow';


function ProductTable ({products}) {

    console.log('product: ', products)

    return(
        <div className="list">
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <ProductRow product={product}/>
                        )
                    })}
                </tbody>
            </table>
           
        </div>
    )
  }



export default ProductTable; 
