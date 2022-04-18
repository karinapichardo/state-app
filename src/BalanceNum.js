import React, { Component } from "react";

export default class BalanceNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balanceNumber: 931,
    };
  }

  render() {
    return <div>{this.state.balanceNumber}</div>;
  }
}
