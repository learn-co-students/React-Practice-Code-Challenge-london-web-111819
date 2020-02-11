import React, { Fragment } from "react";

const Sushi = props => {

    return (
        <div className="sushi">
            <div className="plate" onClick={() => props.handleSushiClick(props.sushi.id)}>
                {/* Tell me if this sushi has been eaten! */

                props.sushi.isEaten ? null : <img src={props.sushi.img_url} width="100%" />}
            </div>
            <h4 className="sushi-details">
                {props.sushi.name} - £{props.sushi.price}
            </h4>
        </div>
    );
};

export default Sushi;
