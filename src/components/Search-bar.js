import React from "react";
import "./Search-bar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name, "me apretaron");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3">
            <Link to="/">
              <img src={logo} alt="" className="logo-barra" />
            </Link>
          </div>
          <div className="col-md-5 ml-2 d-flex pt-4">
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
                  value={this.props.busqueda}
                  placeholder="Buscá una comida"
                  onChange={this.props.onChange}
                />
              </div>
              {/*<button
                type="submit"
                className="btn btn-primary mb-2"
               onClick={this.handleClick}
              >
                Buscar
              </button>*/}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
