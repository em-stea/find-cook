import React from "react";
import "./Meal-card.css";
import { Link } from "react-router-dom";

class MealCard extends React.Component {
  render() {
    return (
      <Link to={"/food?" + this.props.title}>
        <div className="item">
          <div className="picBox">
            <img src={this.props.img} alt="" className="pic" />
          </div>
          <p className="titulo">{this.props.title}</p>
        </div>
      </Link>
    );
  }
}

export default MealCard;
