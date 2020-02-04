import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushisOnTable: [],
    currentBatchOfSushisOnDisplay: [],
    nextSushisCounter: 0,
    moneyLeft: 100
  }

  getAllTheSushis = () => {
    fetch(API).then(object=>object.json())
    .then(sushis=>this.setState({sushis}))
    .then(()=>this.getNextBatchOfSushis())
  }

  componentDidMount(){this.getAllTheSushis()}

  addSushiToTable = (receivedSushi) => {
    if (this.state.moneyLeft >= receivedSushi.price) 
    {
        //1. remove from the available sushis
        let targetIndex = this.state.sushis.indexOf(receivedSushi)
        let newAvailableSushis = [...this.state.sushis]
        newAvailableSushis.splice(targetIndex,1)
        this.setState({sushis:newAvailableSushis})
        //2. Add the received sushi to sushis on table
        this.setState({sushisOnTable: [...this.state.sushisOnTable,receivedSushi]})
        //2.5 Reduce available money
        this.setState({moneyLeft: this.state.moneyLeft-receivedSushi.price})
        //3. OPTION A - remove from the current batch of sushis on display
        let newCurrentBatch = [...this.state.currentBatchOfSushisOnDisplay].filter(item=>item.id!==receivedSushi.id)
        this.setState({currentBatchOfSushisOnDisplay:newCurrentBatch})
    } else return
  }
  
  getNextBatchOfSushis = () => {
    let startingIndex = this.state.nextSushisCounter*4
    let endingIndex = (this.state.nextSushisCounter+1)*4
    let nextBatchOfSushis = [...this.state.sushis].slice(startingIndex,endingIndex)
    this.setState({currentBatchOfSushisOnDisplay:nextBatchOfSushis})
    this.setState({nextSushisCounter:this.state.nextSushisCounter+1})
  }

  render() {

    return (
      <div className="app">
        <SushiContainer 
        addSushiToTable={this.addSushiToTable}
        sushis={this.state.currentBatchOfSushisOnDisplay}
        getNextBatchOfSushis={this.getNextBatchOfSushis}
        />
        <Table sushisOnTable={this.state.sushisOnTable} moneyLeft={this.state.moneyLeft}/>
      </div>
    );
  }
}

export default App;