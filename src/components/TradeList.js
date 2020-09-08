import React from 'react'
import { connect } from 'react-redux'
import { deleteTrade } from '../actions/deleteTrade'

const TradeList = (props) => {

const handleDelete = (trade) => {
  props.deleteTrade(trade.id, trade.portfolio_id)
}
  // if props.trades is not undefined we will iterate and see our
  return (
    <div>
      {props.trades && props.trades.map(trade => 
        <div key={trade.id}>
          {trade.trade_type} - {trade.amount}
          <button onClick={() => handleDelete(trade)}>Delete</button>
        </div>
        )}
    </div>
  )
}

export default connect(null, {deleteTrade})(TradeList)