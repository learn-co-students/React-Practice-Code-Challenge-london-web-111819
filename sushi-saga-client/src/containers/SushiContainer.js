import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
          props.fourSushis.map(sushi => <Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi} eatenSushis={props.eatenSushis}/>)
        }
        <MoreButton addSushi={props.addSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer