import React from 'react'
import { Link } from 'react-router-dom'
import link from './HomeLink'

const Home = () => {

  return (
      <div>
        <h1>
          CRYPTOFOLIO<br/>
        </h1>
        <Link to={'/portfolios'} style={link}>My Portfolios</Link>
      </div>
  )
}

export default Home