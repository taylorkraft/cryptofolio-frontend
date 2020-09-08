export const deleteTrade = (tradeId, portfolioId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/portfolios/${portfolioId}/trades/${tradeId}`, {
    method: 'DELETE'
  })
  .then(resp => resp.json())
  .then(portfolio => dispatch({type: 'DELETE_TRADE', payload: portfolio}))
  }
}