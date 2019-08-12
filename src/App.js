import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  randn_bm(min, max, skew) {
    var u = 0,
      v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = this.randn_bm(min, max, skew); // resample between 0 and 1 if out of range
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
    return num;
  }

  componentDidMount() {
    var rand = this.randn_bm(0, 12000, 1);
    setTimeout(this.increment, rand);
    console.log(rand);
  }

  componentDidUpdate() {
    var rand = this.randn_bm(0, 12000, 1);
    setTimeout(this.increment, rand);
    console.log(rand);
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p className='Counter-text'>{this.state.count}</p>
        </header>
      </div>
    );
  }
}

export default App;
