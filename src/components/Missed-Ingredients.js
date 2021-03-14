import React from "react";
import MealCard from "./Meal-card.js";

class MissedIngredients extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes50 col-md-12">
          <div className="col-md-12">
            <h5>Missed Ingredients</h5>
            <hr />
          </div>
        </div>
        <div className="row col-md-12">
          {this.props.datos.slice(0, 4).map((item, i) => {
            return (
              <MealCard
                img={item.missedIngredients[0]["image"]}
                title={item.missedIngredients[0]["name"]}
                key={i}
              />
            );
          })}
          <MealCard />
        </div>
      </React.Fragment>
    );
  }
}

export default MissedIngredients;
