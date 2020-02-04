import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    eatenSushi: [],
    budget: 100
  }

  selectSushi = (sushi) => {
    this.setState({eatenSushi: [...this.state.eatenSushi, sushi], budget: parseInt(this.state.budget - sushi.price)})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer selectSushi={this.selectSushi} eatenSushi={this.state.eatenSushi} />
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;