import React from 'react'
import { connect } from 'react-redux'
import { createTrade } from '../actions/createTrade'

class TradeForm extends React.Component {

  state = {
    amount: '',
    trade_type: 'buy'
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createTrade(this.state, this.props.portfolio.id)
    this.setState({
      amount: '',
      trade_type: 'buy'
    })
  }

  render() {
    return (
      <div>
        <h4>LOG YOUR TRADES:</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Trade Amount: </label>
          <input type="text" name="amount" value={this.props.amount} onChange={this.handleChange}/>
          <select name="trade_type" value={this.state.trade_type} onChange={this.handleChange}>
            <option>buy</option>
            <option>sell</option>
          </select>
          <input type="submit"/><br/><br/>
        </form>
      </div>
    )
  }
}

export default connect(null, {createTrade})(TradeForm)