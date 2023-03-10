import ProductRow from "./ProductRow"

function ProductsTable({ produtos }){
    return(
        <table>
            
            <thead className="gray">
                <tr>
                    <td>Name</td>
                    <td >Price</td>
                </tr>
                
            </thead>
            <tbody>
            {produtos.map((produto, index) => {
                return (
                    <ProductRow key={index} produto={produto}/>
                );
            })}
                
            </tbody>
        </table>
    )
}
export default ProductsTable