import React, { Fragment } from "react";
import Sushi from "../components/Sushi";
import PreviousButton from "../components/PreviousButton";
import MoreButton from "../components/MoreButton";

const SushiContainer = props => {
    return (
        <Fragment>
            <div className="belt">
                <PreviousButton handleButtonClickBackward={props.handleButtonClickBackward} />
                {props.sushiList.map(sushi => (
                    <Sushi
                        key={sushi.id}
                        sushi={sushi}
                        handleSushiClick={props.handleSushiClick}
                    />
                ))}
                <MoreButton handleButtonClickForward={props.handleButtonClickForward} />
            </div>
        </Fragment>
    );
};

export default SushiContainer;
