import ProductRow from "../ProductRow";
// import "./ProductTable";

const ProductTable = ({products}) =>{
    return(
        <div className='table-container'>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(eachProduct => {
                    return (
                        <ProductRow name={eachProduct.name} price={eachProduct.price} inStock={eachProduct.inStock}/>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}
export default ProductTable;
