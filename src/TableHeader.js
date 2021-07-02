import React from 'react';

const TableHeader = (props) => {
    return ( 
        <tr>
            {props.children.length >= 1 ? props.children.map(child => 
            child
                )
            : props.children[0]
            }
        </tr>
     );
}
 
export default TableHeader;