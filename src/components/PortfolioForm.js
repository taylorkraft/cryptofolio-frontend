import React from 'react'
import { connect } from 'react-redux'
import { createPortfolio } from '../actions/createPortfolio'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import link from './HomeLink'

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


  //this is a controlled form, so the values that we see are coming from the state
  //to clear the input fields we must setState back to it's initial state of empty strings
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createPortfolio(this.state)
    this.setState({redirect: true})
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to='/portfolios' />
    }
    return (
      <div>
        <Link to={'/'} style={link}>HOME</Link><br/>
        <Link to ={'/portfolios'} style={link}>BACK TO PORTFOLIOS</Link><br/><br/>
          <h3>CREATE A NEW PORTFOLIO</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Portfolio Name: </label>
          <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Portfolio Balance: </label>
          <input type="text" placeholder="Balance" value={this.state.balance} name="balance" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {createPortfolio})(PortfolioForm)