import React from 'react'
import TradeForm from '../components/TradeForm'
import TradeList from '../components/TradeList'

class TradesContainer extends React.Component {

  //if this.props.portfolio exists, show trades
  render() {
    return (
      <div>
        <TradeForm/>
        <TradeList trades={this.props.portfolio && this.props.portfolio.trades}/>
      </div>
    )
  }
}

export default TradesContainer