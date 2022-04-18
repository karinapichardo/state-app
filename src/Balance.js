import React, { Component } from "react";
import CountUp from "react-countup";
import BalanceNum from "./BalanceNum";

export default class Balance extends Component {
  render() {
    return (
      <div>
        <h1>
          <span style={{ color: "green" }}>$</span>
          <CountUp end={932} duration={2} />
        </h1>
      </div>
    );
  }
}
