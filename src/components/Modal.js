import React from "react";
import "./Modal.css";

class Modal extends React.Component {
  state = {
    estado: this.props.estadoModal,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      estado: false,
    });
  };

  componentWillReceiveProps(e) {
    this.setState({
      estado: e.estadoModal,
    });
  }

  render() {
    if (this.state.estado !== true) return null;

    return (
      <React.Fragment>
        <div className="modale">
          <div className="cardModal">
            <button className="salir" onClick={this.handleClick}>
              X
            </button>
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
