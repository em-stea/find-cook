import React from "react";
import SearchBar from "./components/Search-bar.js";
import SearchResult from "./components/Search-result.js";

class PageSearchResult extends React.Component {
  state = {
    busqueda: "",
  };

  changeHandle = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };

  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    console.log(search, "lo que me trar la url");

    this.setState({
      busqueda: search,
    });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
