import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

class SushiContainer extends React.Component {

  state = {
    sushis: []
  }

  fetchSushis = () => {
    return fetch('http://localhost:3000/sushis')
      .then(resp => resp.json())
      .then(sushis => this.setState({sushis: sushis.splice(0,4)}))
  }

  componentDidMount() {
    this.fetchSushis()
  }

  renderSushis = () => {
    return this.state.sushis.map(sushi => <Sushi sushi={sushi} selectSushi={this.props.selectSushi} eatenSushi={this.props.eatenSushi} />)
  }

  render() {

    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushis()
          }
          <MoreButton fetchSushis={this.fetchSushis} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer