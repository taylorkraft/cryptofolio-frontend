import React from 'react'
import { connect } from 'react-redux'

class TradeForm extends React.Component {

  state = {
    amount: '',
    trade_type: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Trade Amount: </label>
          <input type="text" name="amount" value={this.props.amount} onChange={this.handlChange}/>
          <select name="trade_type" value={this.state.trade_type} onChange={this.handlChange}>
            <option>buy</option>
            <option>sell</option>
          </select>
          <input type="submit"/><br/><br/>
        </form>
      </div>
    )
  }
}

export default connect(null)(TradeForm)