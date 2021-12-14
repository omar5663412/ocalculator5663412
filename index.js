import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Wrapper,
  Top,
  Keys,
  Screen,
  Button
} from './index.style';
import './style.css';

const INDEXOF_NOT_FOUND = -1;

class Calculator extends Component {
  constructor() {
    super();
    this._handleDisplay = this._handleDisplay.bind(this);
    this._handleReset = this._handleReset.bind(this);
    this._handleResult = this._handleResult.bind(this);
    this.state = {
      display: ''
    };
  }

  _handleDisplay(e) {
    this.setState({
      display: this.state.display + e.currentTarget.textContent
    });
  }

  _handleReset() {
    this.setState({
      display: ''
    });
  }

  _handleResult() {
    if (this.state.display.indexOf('x') !== INDEXOF_NOT_FOUND) {
      let replaceToOpetator = this.state.display.replace('x', '*');
      this.setState({
        display: eval(replaceToOpetator)
      });
    } else if (this.state.display.indexOf('÷') !== INDEXOF_NOT_FOUND) {
      let replaceToOpetator = this.state.display.replace('÷', '/');
      this.setState({
        display: eval(replaceToOpetator) === Infinity ? 0 : eval(replaceToOpetator)
      });
    } else {
      this.setState({
        display: eval(this.state.display)
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <Top>
          <Button onClick={this._handleReset} clear>C</Button>
          <Screen>{this.state.display}</Screen>
        </Top>

        <Keys>
          <Button onClick={this._handleDisplay}>7</Button>
          <Button onClick={this._handleDisplay}>8</Button>
          <Button onClick={this._handleDisplay}>9</Button>
          <Button onClick={this._handleDisplay} operator>+</Button>
          <Button onClick={this._handleDisplay}>4</Button>
          <Button onClick={this._handleDisplay}>5</Button>
          <Button onClick={this._handleDisplay}>6</Button>
          <Button onClick={this._handleDisplay} operator>-</Button>
          <Button onClick={this._handleDisplay}>1</Button>
          <Button onClick={this._handleDisplay}>2</Button>
          <Button onClick={this._handleDisplay}>3</Button>
          <Button onClick={this._handleDisplay} operator>÷</Button>
          <Button onClick={this._handleDisplay}>0</Button>
          <Button onClick={this._handleDisplay}>.</Button>
          <Button onClick={this._handleResult} eval>=</Button>
          <Button onClick={this._handleDisplay} operator>x</Button>
        </Keys>
      </Wrapper>
    );
  }
}

render(
  <Calculator />, document.getElementById('root')
);