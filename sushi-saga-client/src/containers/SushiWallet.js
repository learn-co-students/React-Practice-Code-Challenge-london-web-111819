import React, { Fragment } from "react";
import SushiMoney from "../components/SushiMoney";

const SushiWallet = props => {
    return (
        <Fragment>
            <div className="wallet">
                <SushiMoney value={5} handleMoneyClick = {props.handleMoneyClick}/>
                <SushiMoney value={10} handleMoneyClick = {props.handleMoneyClick}/>
                <SushiMoney value={20} handleMoneyClick = {props.handleMoneyClick}/>
                <SushiMoney value={50} handleMoneyClick = {props.handleMoneyClick}/>
                </div>
        </Fragment>
    );
};

export default SushiWallet;
