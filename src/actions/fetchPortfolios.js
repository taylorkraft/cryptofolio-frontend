// This is a thunk function, dispatch is built into thunk
// We want to dipatch the response from our function to update our redux store

export function fetchPortfolios() {
  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/portfolios')
    .then(resp => resp.json())
    .then(portfolios => dispatch({
      type: 'FETCH_PORTFOLIOS',
      payload: portfolios
    }))
  }
}
