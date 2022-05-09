import React, { Component } from "react";
const increaseAmount = 1;
const decreaseAmount = -1;

export default class ModalCart extends Component {
  renderProductCart = () => {
    return this.props.dataProductCart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <img
              src={item.image}
              alt=""
              style={{ width: "100px", height: "75px" }}
            />
          </td>
          <td>
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                this.props.handleChangeAmount(item.id, increaseAmount);
              }}
            >
              +
            </button>
            {item.amount}
            <button
              className="btn btn-danger ml-2"
              onClick={() => {
                this.props.handleChangeAmount(item.id, decreaseAmount);
              }}
            >
              -
            </button>
          </td>
          <td>{item.price}$</td>
          <td>{item.amount * item.price}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleDeleteCart(item.id);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  renderTotal = () => {
    return this.props.dataProductCart.reduce((total, item, index) => {
      return (total += item.amount * item.price);
    }, 0);
  };

  render() {
    return (
      <div
        className="modal fade bd-example-modal-lg"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" style={{ maxWidth: "50vw" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderProductCart()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan={4}></td>
                    <th>Total</th>
                    <td>{this.renderTotal()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
