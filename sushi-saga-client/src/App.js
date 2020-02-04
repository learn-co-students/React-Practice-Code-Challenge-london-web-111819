import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    fourSushis: [],
    sliceBegin: 0,
    sliceEnd:4,
    eatenSushis:[],
    money:100

  }

  getSushi = (url) => {
    return fetch(url).then(resp => resp.json())
  }

  selectFourSushis = () => {
    this.setState({
      fourSushis: this.state.sushiList.slice(this.state.sliceBegin, this.state.sliceEnd )
    })
  }

  componentDidMount = () => {
    this.getSushi(API)
    .then(list => this.setState({sushiList: list}))
    .then(() => this.selectFourSushis())
  }

  addSushi = () => {
    this.setState({
      sliceBegin: this.state.sliceBegin + 1,
      sliceEnd: this.state.sliceEnd + 1

    })
    this.selectFourSushis()
  }

  eatSushi = (sushiToRemove) => {
    this.state.money > sushiToRemove.price &&
    this.setState({
      sushiList:[...this.state.sushiList].filter(sushi => sushi.id !== sushiToRemove.id),
      eatenSushis: [...this.state.eatenSushis, sushiToRemove],
      money: this.state.money - sushiToRemove.price

    })


  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
            fourSushis={this.state.fourSushis} 
            addSushi={this.addSushi}
            eatSushi={this.eatSushi}
            eatenSushis={this.state.eatenSushis}/>

        <Table  
            eatenSushis={this.state.eatenSushis}
            money={this.state.money}/>
      </div>
    );
  }
}

export default App;