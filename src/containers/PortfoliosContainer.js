import React from 'react'
import PortfolioList from '../components/PortfolioList'
import PortfolioForm from '../components/PortfolioForm'
class PortfoliosContainer extends React.Component {

  render() {
    return (
      <div>
        <PortfolioList/>
        <PortfolioForm/>
      </div>
    )
  }
}

export default PortfoliosContainer