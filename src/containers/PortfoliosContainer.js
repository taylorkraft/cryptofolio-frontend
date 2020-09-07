import React from 'react'
import { connect } from 'react-redux'
import { fetchPortfolios } from '../actions/fetchPortfolios'

import PortfolioForm from '../components/PortfolioForm'
import PortfolioList from '../components/PortfolioList'

class PortfoliosContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPortfolios()
  }

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

export default connect(mapStateToProps, {fetchPortfolios})(PortfoliosContainer)