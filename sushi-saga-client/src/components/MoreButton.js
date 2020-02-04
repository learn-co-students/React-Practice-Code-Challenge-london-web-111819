import React from 'react'

const MoreButton = (props) => {
    return <button onClick={()=>props.getNextBatchOfSushis()}>
            More sushi!
          </button>
}

export default MoreButton