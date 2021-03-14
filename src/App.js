import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./Page-search-result.js";
import PageHome from "./Page-home.js";
import PageFood from "./Page-food";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult}></Route>
            <Route exact path="/food" component={PageFood}></Route>
            <Route path="/" component={PageHome}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
