import React from 'react'
import SearchPurple from './SearchPurple';
import Table from './GreenBox';


const YellowSquare = ({handleSearch}) =>
<div>
<h1>This is the YellowSquare</h1>
<div className="Purple-one">
    <SearchPurple handleSearch={handleSearch}/>
</div>
<br></br>
<div className = "Green-one">
    <Table/>
</div>

</div>

export default YellowSquare
