import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "./ProductTable.css";
import ProductRow from "./ProductRow";
import ArticleList from "../data.json";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleArray: ArticleList
    };
  }
  render() {
    console.log(this.state.articleArray);
    const { articleArray } = this.state;
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {articleArray.data.map(oneArticle => {
            return <ProductRow item={oneArticle} key={oneArticle.name} />;
          })}
        </tbody>
      </Table>
    );
  }
}

export default ProductTable;
