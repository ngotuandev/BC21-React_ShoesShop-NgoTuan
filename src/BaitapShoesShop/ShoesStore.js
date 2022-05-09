import React, { Component } from "react";
import ProductList from "./ProductList";
import { product } from "./dataShoes";
import ModalDetail from "./ModalDetail";
import ModalCart from "./ModalCart";

export default class ShoesStore extends Component {
  state = {
    productDetail: product[0],
    productCart: [],
  };

  //* change ModalDetail
  setStateModal = (item) => {
    this.setState({
      productDetail: item,
    });
  };

  //* add product to cart
  handleAddCart = (item) => {
    let productCartNew = [...this.state.productCart];
    let productCartUpdate = { ...item, amount: 1 };
    let index = this.state.productCart.findIndex(
      (dataProduct) => dataProduct.id === item.id
    );
    if (index !== -1) {
      productCartNew[index].amount += 1;
    } else {
      productCartNew.push(productCartUpdate);
    }

    this.setState({
      productCart: productCartNew,
    });
  };

  //* change amount in modalCart
  handleChangeAmount = (id, number) => {
    let productCartNew = [...this.state.productCart];
    let index = this.state.productCart.findIndex(
      (dataAmount) => dataAmount.id === id
    );
    if (index !== -1) {
      productCartNew[index].amount = productCartNew[index].amount + number;
      productCartNew[index].amount === 0 && productCartNew.splice(index, 1);
    }

    this.setState({
      productCart: productCartNew,
    });
  };

  //* delete product in modalCart
  handleDeleteCart = (id) => {
    let productCartNew = [...this.state.productCart];
    let index = this.state.productCart.findIndex(
      (dataCart) => dataCart.id === id
    );
    if (index !== -1) {
      productCartNew.splice(index, 1);
    }
    this.setState({
      productCart: productCartNew,
    });
  };

  //* total quantity of products in the cart
  amountCart = () => {
    return this.state.productCart.reduce((amountCart, item, index) => {
      return (amountCart += item.amount);
    }, 0);
  };

  render() {
    return (
      <div className="container">
        <h1 className="mb-5">Shoes shop</h1>
        <div
          className="text-right"
          style={{ cursor: "pointer" }}
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          <h2>
            <i className="fa-solid fa-cart-shopping mx-2"></i>Cart (
            {this.amountCart()})
          </h2>
        </div>
        <ModalCart
          dataProductCart={this.state.productCart}
          handleChangeAmount={this.handleChangeAmount}
          handleDeleteCart={this.handleDeleteCart}
        />

        <ProductList
          productsData={product}
          setStateModal={this.setStateModal}
          handleAddCart={this.handleAddCart}
        />
        <ModalDetail content={this.state.productDetail} />
      </div>
    );
  }
}
