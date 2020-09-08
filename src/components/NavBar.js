import React, {useState} from 'react'
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            CRYPTOFOLIO
          </Link>
        </div>
      </nav>
    </>
  )
}

export default  NavBar