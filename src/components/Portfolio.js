import React from 'react'

const Portfolio = (props) => {
  console.log(props)
  return (
    <li>
      {props.portfolio.name} - {props.portfolio.balance}
    </li>
  )
}

export default Portfolio