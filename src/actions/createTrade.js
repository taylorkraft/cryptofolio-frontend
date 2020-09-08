export const createTrade = (trade, portfolioId) => {

  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/portfolios/${portfolioId}/trades`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trade)
    })
    .then(resp => resp.json())
    .then(portfolio => dispatch({type: 'CREATE_TRADE', payload: portfolio}))
  }
}