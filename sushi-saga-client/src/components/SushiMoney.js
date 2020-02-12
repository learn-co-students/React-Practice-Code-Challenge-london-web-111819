import React, { Fragment } from "react";

const SushiMoney = props => {
    return (
        <div className="moneyCard">
            <div className="money" onClick={() => props.handleMoneyClick(props.value)}>
                <img
                    src="https://previews.123rf.com/images/sanek13744/sanek137441701/sanek13744170100129/70257101-stacks-of-gold-coins-and-dollar-cash-vector-illustration-in-flat-design-on-white-background.jpg"
                    width="100%"
                />
            </div>
            <h1 className="money-value"> ${props.value} </h1>
        </div>
    );
};

export default SushiMoney;
