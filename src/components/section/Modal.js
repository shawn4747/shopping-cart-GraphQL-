import "../css/Modal.css";
import MiniCart from "./MiniCart";
import CartIcon from "../svg/cart.svg";
import React, { PureComponent } from "react";

class Modal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalOpened: false,
    };

    this.modalToggle = this.modalToggle.bind(this);
  }

  modalToggle() {
    this.setState({ modalOpened: !this.state.modalOpened });
  }

  render() {
    const coverClass = this.state.modalOpened
      ? "modal-cover modal-cover-active"
      : "modal-cover";
    const containerClass = this.state.modalOpened
      ? "modal-container modal-container-active"
      : "modal-container";
    return (
      <div>
        <p className="btn btn-primary" onClick={this.modalToggle}>
          {" "}
          <img src={CartIcon} alt="" width="20" />
        </p>
        <div className={containerClass}>
          <div className="modal-header"></div>
          <div className="modal-body">
            <MiniCart />
          </div>
          <div className="modal-footer"></div>
        </div>
        <div className={coverClass} onClick={this.modalToggle}></div>
      </div>
    );
  }
}

export default Modal;
