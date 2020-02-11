import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
 
  return (
  
    <Fragment>
      <div className="belt">
        {
          props.sushiList.map(sushi => (<Sushi key={sushi.id} sushi={sushi} handleSushiClick={props.handleSushiClick} /> ))
        }
        <MoreButton handleButtonClick = {props.handleButtonClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer