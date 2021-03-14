import React from "react";
import SearchBar from "./components/Search-bar.js";
import "./Page-food.css";
import MissedIngredients from "./components/Missed-Ingredients";
import Loading from "./components/Loading.js";
import ErrorStatus from "./components/ErrorStatus.js";

class PageSearchResult extends React.Component {
  state = {
    data: {
      results: [
        {
          missedIngredients: [
            {
              id: "",
              amount: "",
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "",
              name: "",
              original: "",
              originalString: "",
              originalName: "",
              metaInformation: [""],
              meta: [""],
              image: "",
            },
          ],
        },
      ],
    },
  };

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    let food = this.props.history.location.search.substr(1);
    this.fetchData(
      "https://api.spoonacular.com/recipes/complexSearch?query=" +
        food +
        "&addRecipeInformation=true&fillIngredients=true&apiKey=42321e187fa44cfab6437a02779efb16"
    );
  }

  fetchData = async (url) => {
    this.setState({
      loading: true,
    });

    const response = await fetch(url);
    const datos = await response.json();
    console.log(datos, "lo que trae la api");
    if (datos.status) {
      this.setState({
        loading: false,
        status: true,
        errorMessage: datos.message,
      });
    } else {
      this.setState({
        loading: false,
        status: false,
        data: datos,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />

        {this.state.loading && <Loading />}
        {this.state.status && (
          <ErrorStatus errorMessage={this.state.errorMessage} />
        )}

        <div className="container">
          <div className="row centrar">
            <div className="col-md-12">
              {this.state.data.results.slice(0, 1).map((item, i) => {
                return (
                  <img
                    src={item.image}
                    alt=""
                    className="pic-food margenes50"
                  />
                );
              })}
              {this.state.data.results.slice(0, 1).map((item, i) => {
                return <h2>{item.title}</h2>;
              })}
              {this.state.data.results.slice(0, 1).map((item, i) => {
                return <p>{item.summary}</p>;
              })}
            </div>
          </div>
          <div className="row centrar justify-content-center">
            <MissedIngredients datos={this.state.data.results} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
