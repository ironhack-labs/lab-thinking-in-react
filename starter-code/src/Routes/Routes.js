import React from "react"
import {Route,Switch} from "react-router-dom"
import FilterableProductTable from "../Components/FilterableProductTable"
import ProductRow from "../Components/ProductRow"
import ProductTable from "../Components/ProductTable"
import SearchBar from "../Components/SearchBar"



export default function (){
    return (
        <Switch>
            <Route path="/" component={FilterableProductTable}></Route>
            <Route path="/" component={ProductRow}></Route>
            <Route path="/" component={ProductTable}></Route>
            <Route path="/" component={SearchBar}></Route>
        </Switch>
    )
}