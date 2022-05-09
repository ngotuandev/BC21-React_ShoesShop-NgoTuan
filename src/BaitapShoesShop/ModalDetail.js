import React, { Component } from "react";

export default class ModalDetail extends Component {
  render() {
    let {
      id,
      name,
      alias,
      price,
      description,
      shortDescription,
      quantity,
      image,
    } = this.props.content;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "60vw" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Product Info
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
              <div className="row">
                <div className="col-5">
                  <img src={image} alt="" style={{ width: "450px" }} />
                </div>
                <div className="col-7">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>ID</th>
                        <td>{id}</td>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <td>{name}</td>
                      </tr>
                      <tr>
                        <th>Alias</th>
                        <td>{alias}</td>
                      </tr>
                      <tr>
                        <th>Price</th>
                        <td>{price}</td>
                      </tr>
                      <tr>
                        <th>Description</th>
                        <td>{description}</td>
                      </tr>
                      <tr>
                        <th>Short Description</th>
                        <td>{shortDescription}</td>
                      </tr>
                      <tr>
                        <th>Quantity</th>
                        <td>{quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
