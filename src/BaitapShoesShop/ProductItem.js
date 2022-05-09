import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { image, price, name } = this.props.item;
    return (
      <div className="card text-left">
        <img
          className="card-img-top"
          src={image}
          alt=""
          style={{ cursor: "pointer" }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price} $</p>
          <div className="row">
            <button
              className="btn btn-dark col-5 ml-3 mr-5"
              onClick={() => {
                this.props.handleAddCart(this.props.item);
              }}
            >
              Add to carts <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button
              className="btn btn-secondary col-4"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => {
                this.props.setStateModal(this.props.item);
              }}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
