import React from 'react'
import { connect } from 'react-redux'
import { createPortfolio } from '../actions/createPortfolio'

class PortfolioForm extends React.Component {

  state = {
    name:'',
    balance: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createPortfolio(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Portfolio Name: </label>
          <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Portfolio Balance: </label>
          <input type="text" placeholder="Balance" value={this.state.balance} name="balance" onChange={this.handleChange}/><br/>
          <input type="submit"/><br/><br/>
        </form>
      </div>
    )
  }
}

export default connect(null, {createPortfolio})(PortfolioForm)