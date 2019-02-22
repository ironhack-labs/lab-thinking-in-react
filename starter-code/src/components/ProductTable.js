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
    const { articleArray } = this.state;
    const { filterValue } = this.props;
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
            if (
              oneArticle.name.toLowerCase().includes(filterValue.toLowerCase())
            ) {
              return <ProductRow item={oneArticle} key={oneArticle.name} />;
            }
          })}
        </tbody>
      </Table>
    );
  }
}

export default ProductTable;
