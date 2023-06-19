import React from "react"
import classNames from "classnames"

function ProductRow(props) {
    //const isEmptyClass = !props.productFromList.inStock && "empty"
    return(
    <>
        {console.log("Inside my props",props)}
        {console.log("And one level down",props.productFromList)}
        {console.log("And now at the bottom",props.productFromList.name)}

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