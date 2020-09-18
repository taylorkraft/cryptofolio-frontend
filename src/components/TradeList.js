import React from 'react'

const TradeList = (props) => {

  // if props.trades is not undefined we will iterate and see our
  return (
    <div>

      {props.trades && props.trades.map(trade => 

        <li key={trade.id}>

          {trade.trade_type} - {trade.amount}

        </li>)}
    </div>
  )
}

export default TradeList