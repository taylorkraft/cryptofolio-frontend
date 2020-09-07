import React from 'react'
import { connect } from 'react-redux'

import PortfolioForm from '../components/PortfolioForm'
import PortfolioList from '../components/PortfolioList'

class PortfoliosContainer extends React.Component {

  render() {
    return (
      <div>
        <PortfolioForm/>
        <PortfolioList/>
      </div>
    )
  }
}

// this state is from our redux store
const mapStateToProps = state => {
  return {
    portfolios: state.portfolios
  }
}

export default connect(mapStateToProps)(PortfoliosContainer)