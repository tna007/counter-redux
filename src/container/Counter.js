import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Your score: {this.props.ctr}</h1>
        <div>
          <button onClick={this.props.onIncCounter}>Add one</button>
          <button onClick={this.props.onDecCounter}>Remove one</button>
          <button onClick={this.props.removeFiveCounter}>Remove 5</button>
          <button onClick={this.props.addFiveCounter}>Add 5</button>
          <button onClick={this.props.resetCounter}>Reset</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    addFiveCounter: () => dispatch({ type: actionTypes.addFIVE, value: 5 }),
    removeFiveCounter: () =>
      dispatch({ type: actionTypes.removeFIVE, value: 5 }),
    resetCounter: () => dispatch({ type: actionTypes.RESET }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
