import { ProductRow } from "./ProductRow"

export function ProductTable(props){
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((oneProduct)=> {
                        return(
                              <ProductRow key={oneProduct.id} oneProduct={oneProduct} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}