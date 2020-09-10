import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
      <div>
        <Link to={'/portfolios'}>My Portfolios</Link>
      </div>
  )
}

export default Home