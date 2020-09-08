import React from 'react'
import { connect } from 'react-redux'

class TradeForm extends React.Component {


  render() {
    return (
      <div>
        <form>
          <label>Trade Type: </label>
          <select>
            <option>buy</option>
            <option>sell</option>
          </select>
        </form>
      </div>
    )
  }
}

export default connect(null)(TradeForm)