import React from "react";
import MealCard from "./Meal-card";
import Loading from "./Loading.js";
import ErrorStatus from "./ErrorStatus.js";

class SearchResult extends React.Component {
  state = {
    loading: false,
    status: null,
    data: {
      results: [],
    },
  };

  /*componentWillReceiveProps(e) { api de SimilarRecipes
    let termino = e.busqueda;
    this.fetchData(
      "https://api.spoonacular.com/recipes/" +
        termino +
        "/similar&apiKey=42321e187fa44cfab6437a02779efb16"
    );
  }
*/
  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData(
      "https://api.spoonacular.com/recipes/complexSearch?query=" +
        termino +
        "&apiKey=42321e187fa44cfab6437a02779efb16"
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
        {this.state.loading && <Loading />}
        {this.state.status && (
          <ErrorStatus errorMessage={this.state.errorMessage} />
        )}
        <div className="container">
          <div className="row">
            {this.state.data.results.map((item, i) => {
              return <MealCard img={item.image} title={item.title} key={i} />;
            })}

            <h1>{this.props.busqueda}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
