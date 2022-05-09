import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    return this.props.productsData.map((product, index) => {
      return (
        <div className="col-4 mb-5" key={index}>
          <ProductItem
            item={product}
            setStateModal={this.props.setStateModal}
            handleAddCart={this.props.handleAddCart}
          />
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}
