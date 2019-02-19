import React, { Component } from 'react';
import './App.css';
import Button from './button03.js'

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  ) 
};

class App extends Component {

  state = { counter: 0};

  incrementCounter = (incrementValue) => {
      this.setState({
          counter: this.state.counter + incrementValue
      });
  }

  render() {
    return (
      <div className="App">
          <div>
            <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
            <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
            <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
            <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
            <Result counter={this.state.counter} />
          </div>        
      </div>
    );
  }
}

export default App;
