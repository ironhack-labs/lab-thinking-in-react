import React from "react"
import classNames from "classnames"

function ProductRow(props) {
    //const isEmptyClass = !props.productFromList.inStock && "empty"
    return(
    <>

        <tr>
            <td
              // className={isEmptyClass}
              className={classNames({empty: !props.productFromList.inStock})}
              // style={{color: props.productFromList.inStock && "red"}}
            >{props.productFromList.name }</td>
            <td>{props.productFromList.price}</td>
        </tr>
    </>
    )
}

export default ProductRow