import React, { Component } from "react";
import Balance from "./Balance";
import BalanceNum from "./BalanceNum";
import PopupDev from "./PopupDev";

export default class Greetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Austin",
      age: 31,
      city: "NYC",
      color: "Favorite Color",
    };
  }

  updateName = () => {
    this.setState({ name: "karina" });
  };

  showColor = () => {
    this.setState({ color: "pink" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.city}</h1>
        <h1>{this.state.color}</h1>

        <button type="button" onClick={this.updateName}>
          Change Name
        </button>
        <br />
        <br />
        <button type="button" onClick={this.showColor}>
          Show Color
        </button>
        <br />

        <Balance />
        {/* <BalanceNum>{this.props.children}</BalanceNum> */}

        <PopupDev />
      </div>
    );
  }
}
