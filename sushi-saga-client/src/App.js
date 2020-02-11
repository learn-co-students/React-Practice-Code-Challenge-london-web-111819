import React, { Component } from "react";
import SushiWallet from "./containers/SushiWallet"
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:5000/sushis";

class App extends Component {
    state = {
        sushiList: [],
        eatenSushiList: [],
        index: 0, 
        customerWallet: 50
    };

    getSushi = () => {
        return fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ sushiList: data }));
    };

    componentDidMount() {
        this.getSushi();
    }

    handleButtonClick = () => {
        this.setState({ index: this.state.index + 4 });
    };

    handleSushiClick = (id) => {

        // when we click the sushi, the price of the sushi needs to be removed from the customers wallet
        //things we need to find - price of the sushi clicked

        const clickedSushi = this.state.sushiList.find(sushi => sushi.id === id)

        // if (clickedSushi.price > this.state.customerWallet) return;

        const updatedBalance = this.state.customerWallet - clickedSushi.price

        if (updatedBalance < 0)  return;

        this.setState({ 
            eatenSushiList: [...this.state.eatenSushiList, id], 
            customerWallet: updatedBalance
        });

        //when we set the state for eatenSushiList, we get a copy of the current state of the eatenSushiList array and push (via spread) (in this new array, create a copy of the this array and also include id at the end of the array) the ID of the newly clicked sushi

    }


    handleMoneyClick = (value) => {

        const updatedBalance = this.state.customerWallet + value

        this.setState({  
            customerWallet: updatedBalance
        });

    }

    render() {

        const renderSushi = this.state.sushiList.slice(
            this.state.index,
            this.state.index + 4
        )
        //This gives four sushis from the sushiList array

        const sushiList = renderSushi.map(sushi => {
            return {
                ...sushi,
                isEaten: this.state.eatenSushiList.includes(sushi.id)
            }
        })

        //For each of the four sushis showing at a time, a copy of the sushi object is made and a new attribute isEaten is created
        //isEaten returns a truthfy if the sushi id matches any of ids included in the eatenSushiList 
    
        
        return (
            <div className="app">
                <SushiWallet
                    handleMoneyClick = {this.handleMoneyClick}

                    />
                <SushiContainer
                    handleButtonClick={this.handleButtonClick}
                    handleSushiClick={this.handleSushiClick}

                    sushiList={sushiList}

                />
                <Table eatenSushiList={this.state.eatenSushiList} customerWallet={this.state.customerWallet}/>
                
            </div>
        );
    }
}

export default App;
