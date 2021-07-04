import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: "",
      result: "",
    };
  }

  onKeyPress = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) this.onCalculate();
  };

  onClick = (e) => {
    var value = e.target.value;
    this.setState({
      expression: this.state.expression + value,
    });
  };

  onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({
      [name]: value.replace(/[^0-9\\+\-\\*\\/\\(\\)\\.\\%]/g, ""),
    });
  };

  onDelete = () => {
    this.setState({
      expression: this.state.expression.substr(
        0,
        this.state.expression.length - 1
      ),
    });
  };

  calculateExpression = (exp) => {
    try {
      // eslint-disable-next-line
      return eval(exp);
    } catch (err) {
      return false;
    }
  };

  onCalculate = () => {
    var expression = this.state.expression.replace(
      /[^0-9\\+\-\\*\\/\\(\\)\\.\\%]/g,
      ""
    );
    var result = this.calculateExpression(expression);
    if (result !== undefined) {
      this.setState({
        expression: result !== false ? result.toString() : "Error",
        result: result !== false ? result.toString() : "Error",
      });
    }
  };

  onHandleSquare = () => {
    if (this.state.result) {
      var exp = "Math.sqrt(" + this.state.expression + ")";
      var result = this.calculateExpression(exp);
      this.setState({
        expression: result ? result.toString() : "Error",
        result: result ? result.toString() : "Error",
      });
    } else {
      this.setState({
        expression: "Error",
      });
    }
  };

  onClearAll = () => {
    this.setState({
      expression: "",
      result: "",
    });
  };

  render() {
    var { expression } = this.state;
    return (
      <div className="container">
        <div className="header">Calculator</div>
        <input
          name="expression"
          value={expression}
          type="text"
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          className="result"
        />
        <div className="first-row">
          <input
            onClick={this.onHandleSquare}
            type="button"
            name=""
            value="&radic;"
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="("
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value=")"
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="%"
            className="global"
          />
        </div>
        <div className="second-row">
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="7"
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="8"
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="9"
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="/"
            className="global"
          />
        </div>
        <div className="third-row">
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="4"
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="5"
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="6"
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="*"
            className="global"
          />
        </div>
        <div className="fourth-row">
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="1"
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="2"
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="3"
            className="global"
          />
          <input
            onClick={this.onClick}
            type="button"
            name=""
            value="-"
            className="global"
          />
        </div>
        <div className="conflict">
          <div className="left">
            <input
              onClick={this.onClick}
              type="button"
              name=""
              value="0"
              className=" big"
            />
            <input
              onClick={this.onClick}
              type="button"
              name=""
              value="."
              className=" small"
            />
            <input
              onClick={this.onDelete}
              type="button"
              name=""
              value="DEL"
              className=" red small white-text top-margin"
            />
            <input
              onClick={this.onCalculate}
              type="button"
              name=""
              value="="
              className=" green white-text big top-margin"
            />
          </div>
          <div className="right">
            <input
              onClick={this.onClick}
              type="button"
              name=""
              value="+"
              className="global grey plus"
            />
            <input
              onClick={this.onClearAll}
              type="button"
              name=""
              value="AC"
              className="global red white-text plus"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
