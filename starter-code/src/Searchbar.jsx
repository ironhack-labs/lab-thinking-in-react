// import React, { Component } from 'react'

// export default class Searchbar extends Component {
//     render() {
//         return (
//             <div className="header-search">
//                 <label htmlFor="val">Search</label>
//                 <input className="searchbar" type="text" name="" placeholder="Search"/>
//                 <div className="checkbox">
//                     <input type="checkbox"/> <label htmlFor="">Only show products in stock</label>
//                 </div>
//             </div>
//         )
//     }
// }

import React from 'react'

export default function Searchbar({clbk, clbk2}) {

    return (
        <div className="header-search">
            <label htmlFor="val">Search</label>
            <input className="searchbar" type="text" name="product" onChange={clbk} placeholder="Search"/>
            <div className="checkbox">
                <input type="checkbox" onChange={clbk2} /> <label htmlFor="">Only show products in stock</label>
            </div>
        </div>
    )
}

