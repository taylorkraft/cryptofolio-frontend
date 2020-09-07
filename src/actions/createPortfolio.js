export const createPortfolio = (data) => {
  //dispatches to reducer
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/portfolios', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(portfolio => dispatch({type: 'CREATE_PORTFOLIO', payload: portfolio}))
  }
}