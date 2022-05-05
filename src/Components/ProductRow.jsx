import { useState, useEffect } from "react";


function ProductRow({ jsonData }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(jsonData);
    }, []);
    console.log(jsonData)


    return (
        <div>
            <h3>Name | Price</h3>

            {products.map((elm) => {
                return (
                    <div key={elm.id} className="productRow">
                        <p className={elm.inStock ? "black" : "red"}>Product Row: {elm.name} | {elm.price}</p>
                        <hr />
                    </div>
                );
            })}
        </div>
    )

}

export default ProductRow