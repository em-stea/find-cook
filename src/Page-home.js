import React from "react";
import "./Page-home.css";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import Modal from "./components/Modal.js";

class PageHome extends React.Component {
  state = {
    busqueda: "",
    modal: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };

  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div>
            <div className="col-md-12 centrar">
              <img src={logo} alt="" id="logo" />
            </div>
            <div className="col-md-12">
              <form
                className="form-inline"
                onSubmit={this.handleSubmit}
                name="Form"
              >
                <div className="busqueda">
                  <input
                    name="busqueda"
                    type="text"
                    id="buscar"
                    value={this.props.busqueda} //o value={this.props.busqueda}
                    placeholder="Buscá una comida"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="actions">
                  <button className="btng" type="submit">
                    Search Recipes
                  </button>
                  <button className="btng" onClick={this.handleClick}>
                    Lorem ipsum
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {ReactDOM.createPortal(
          <Modal estadoModal={this.state.modal}>
            <h4 className="textoModal">Hola</h4>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
