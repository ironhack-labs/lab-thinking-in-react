import ProductRow from "./ProductRow";

function ProductTable({ products }) {






    return (
        <div>


            <table>
                <tr><th><h3>PopiCosas</h3></th><th><h3>PopiPrecios</h3></th></tr>


                {products.map(elm => {

                    return <tr key={elm.id}><ProductRow {...elm} /></tr>
                })}

            </table>
        </div>


    )
}
export default ProductTable