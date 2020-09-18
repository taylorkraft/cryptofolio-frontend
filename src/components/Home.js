import React from 'react'
import { Link } from 'react-router-dom'
import link from './Link'

const Home = () => {

  return (
      <div>
        <h1>
          CRYPTOFOLIO
          <br/>
        </h1>
          <Link to={'/portfolios'} style={link}> MY PORTFOLIOS </Link>
      </div>
  )
}

export default Home