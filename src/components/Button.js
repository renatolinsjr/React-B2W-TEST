import React, { Component } from 'react'
import { func } from 'prop-types'

export default class TravelButton extends Component {

  static propTypes = {
    planetInfo: func.isRequired,
    playAudio: func.isRequired
  }

  // GET HTTP e som do R2D2
  goToNextPlanet = () => {
    this.props.planetInfo()
  }

  render() {
    return (
      <div className='bottom-container'>
        <button className='btn'>
          <span className='btn__text' onClick={this.goToNextPlanet} onKeyPress={this.goToNextPlanet}>Go to the next planet</span>
        </button>

      </div>
    )
  }
}
