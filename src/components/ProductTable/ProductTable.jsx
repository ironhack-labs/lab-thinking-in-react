import react from "react"
import ProductRow from "../ProductRow/ProductRow"

const ProductTable = ({ products }) => {

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h1 className="fw-bold">Name</h1>
                    </div>
                    <div className="col-md-6">
                        <h1 className="fw-bold">Price</h1>
                    </div>
                </div>


                {
                    products.map(product => {
                        return (
                            <div className="row" key={product.id} >

                                <ProductRow {...product} />

                            </div>
                        )
                    })
                }
            </div>
        </>

    )

}

export default ProductTable