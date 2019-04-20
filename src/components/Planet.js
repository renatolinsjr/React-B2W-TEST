import React from 'react'
import { string } from 'prop-types'

const Planet = (props) => (
  <main className='main'>
    <ul className='planet'>
      <li className="planet__name">{props.name}</li>
      <br />
      <li className="planet__label">Population: <span className="planet__info">{props.population}</span></li>
      <li className="planet__label">Climate: <span className="planet__info">{props.climate}</span></li>
      <li className="planet__label">Terrain: <span className="planet__info">{props.terrain}</span></li>
      <li className="planet__label">Featured in the films: <span className="planet__info">{props.featured}</span></li>
    </ul>
  </main>
)

Planet.propTypes = {
  name: string.isRequired,
  population: string.isRequired,
  climate: string.isRequired,
  terrain: string.isRequired,
  featured: string.isRequired
}

export default Planet
