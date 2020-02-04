import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import AddMoney from './components/AddMoney'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    eatenSushi: [],
    index: 0, //if needing to just present some items on page...
    money: 80
  }

  componentDidMount() {
    fetch('http://localhost:3000/sushis')
    .then(resp => resp.json())
    .then(sushis => {this.setState({
         sushiList: sushis
       })
     })
  }

  eatSushi = sushi => {
    this.state.money >= sushi.price
    ? this.setState({
       eatenSushi: [...this.state.eatenSushi, sushi],
       money: this.state.money - sushi.price
    })
    : alert('You cannot afford to buy this')
  }

  handleClick = () => {
    this.state.index >= 96 //there are 100 sushi, when index reaches 96
    ? this.setState({      //reset index to 0 so it loops
      index: 0
    })
    : this.setState({
      index: this.state.index + 4
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      money: Number(this.state.money) + Number(event.target.money.value)
    })
  }



  render() {
    const fourSushi = this.state.sushiList.slice(this.state.index, this.state.index + 4)
    return (
      <div className="app">
        <SushiContainer sushiList={fourSushi} eatSushi={this.eatSushi} eatenSushi={this.state.eatenSushi} handleClick={this.handleClick}/>
        <Table money={this.state.money}/>
        <AddMoney handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;